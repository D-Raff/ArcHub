import { connection as db} from "../config";
import { hash, compare } from "bcrypt"

class Users{
    fetchUsers(req, res){
        const qry = `
        SELECT userID, firstName, lastName, emailAdd, ContactNo, userRole
        FROM;
        `
        db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
}
export{
    Users
}