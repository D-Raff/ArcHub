import express from "express";
import bodyParser from "body-parser";
import {cart} from "../model/index.js"

const cartRouter =express.Router()

cartRouter.get('/', (req, res)=>{
    try {
        cart.fetchCart(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "An error occured when attempting to fetch your cart"
        })
    }
})

export{
    cartRouter, express
}