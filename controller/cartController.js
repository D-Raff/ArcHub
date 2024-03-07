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
cartRouter.delete('/delete/:id', bodyParser.json(), (req, res)=>{
    try {
        cart.deleteProduct(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "An error occured when tryin gto remove this item from the cart"
        })
    }
})

export{
    cartRouter, express
}