import express from "express";
import bodyParser from "body-parser";
import {cart} from "../model/index.js"
import { verifyToken } from "../middleware/userAuthentication.js";

const cartRouter =express.Router()

cartRouter.get('/', verifyToken, (req, res)=>{
    console.log(JSON.stringify(req.body.userID)+'controller 2')
    try {
        cart.fetchCart(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "An error occured when attempting to fetch your cart"
        })
    }
})
cartRouter.delete('/delete/:id', bodyParser.json(), verifyToken, (req, res)=>{
    try {
        cart.deleteProduct(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "An error occured when tryin gto remove this item from the cart"
        })
    }
})
cartRouter.delete('/delete', bodyParser.json(), verifyToken, (req, res)=>{
    try {
        cart.clearCart(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "could not clear cart"
        })
    }
})
cartRouter.post('/add', bodyParser.json(), verifyToken, (req,res)=>{
    console.log(JSON.stringify(req.body.userID)+'controller')
    try {
        cart.addToCart(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "An error occured when adding this product to cart"
        })
    }
})
export{
    cartRouter, express
}