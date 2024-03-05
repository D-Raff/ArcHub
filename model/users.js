import { connection as db} from "../config/index.js";
import { hash, compare } from "bcrypt"
import {createToken} from '../middleware/userAuthentication.js';
class Users{
    fetchUsers(req, res){
        const qry = `
        SELECT userID, firstName, lastName, emailAdd, userPassword, ContactNo, userRole
        FROM Users;
        `
        db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    fetchUser(req, res){
        const qry = `
        SELECT userID, firstName, lastName, emailAdd, ContactNo, userRole
        FROM Users
        WHERE userID = ${req.params.id}
        `
        db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }
    async createUser(req, res){
        let data = req.body
        data.userPassword = await hash(data?.userPassword, 10)
        let user = {
            emailAdd: data.emailAdd,
            userPassword: data.userPassword
        }
        const qry = `
        INSERT INTO Users SET ?; 
        `
        db.query(qry, [data], (err)=>{
            if (err){
                res.json({
                    status: res.statusCode,
                    msg: "This email address is already in use"
                })
            }else{
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg: 'You\'re registered'
                })
            }
        })
    }
    async deleteUser(req, res){
        const qry = `
        Delete FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "This User was deleted"
            })
        })
    }
    async updateUser(req, res){
        const data = req.body
        if(data?.userPwd){
            data.userPwd = await hash(data?.userPwd, 8)
        }
        const qry = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id}
        `
        db.query(qry, [data], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "This user was updated"
            })
        })
    }
}
export{
    Users
}