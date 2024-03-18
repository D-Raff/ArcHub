import express from "express";
import bodyParser from "body-parser";
import { products } from "../model/index.js";
import { verifyToken } from "../middleware/userAuthentication.js";

const productRouter = express.Router()

//fetch all products
productRouter.get('/', (req, res)=>{
    try {
        products.fetchProducts(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "An error occured when attempting to fetch products"
        })
    }
})
//fetch a single product
productRouter.get('/:id', (req, res)=>{
    try {
        products.fetchProduct(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "An error occured when attempting to fetch this product"
        })
    }
})
//add a new product
productRouter.post('/add', bodyParser.json(), (req, res)=>{
    try {
        products.addProduct(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to add a new product at this time. Please try again later."
        })
    }
})
productRouter.patch('/update/:id', bodyParser.json(), (req, res)=>{
    try {
        products.updateProduct(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "This product was updated"
        })
    }
})
productRouter.delete('/delete/:id', bodyParser.json(), (req, res)=>{
    try {
        products.deleteProduct(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "deleted product"
        })
    }
})
export{
    productRouter, express
}