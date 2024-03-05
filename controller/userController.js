import express from "express";
import bodyParser from "body-parser";
import { users } from "../model/index.js";


const userRouter = express.Router()
//fetch users
userRouter.get('/', (req, res)=>{
    try {
        users.fetchUsers(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "An error occured while trying to fetch users"
        })
    }
})

export{
    userRouter, express
}