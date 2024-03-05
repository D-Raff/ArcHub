import { connection as db } from "../config/index.js";

class Products{
    fetchProducts(req, res){
        const qry = `
        SELECT ProductID, ProductName, Category, Price, ProdImg, ProdDesc, Stock
        FROM Products;
        `
        db.query(qry, (err, results)=> {
            if (err) throw err
            res.json({
                status: res.statuscode,
                results
            })
        })
    }
    fetchProduct(req, res){
        const qry = `
        SELECT ProductID, ProductName, Category, Price, ProdImg, ProdDesc, Stock
        FROM Products
        WHERE productID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }
    async addProduct(req, res){
        const qry = `
        INSERT INTO Products SET ?;
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "New product was added"
            })
        })
    }
    async addProduct(req, res){
        const qry = `
        INSERT INTO Products SET ?;
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "New product was added"
            })
        })
    }
    async deleteProduct(req, res){
        const qry = `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "This product was deleted"
            })
        })
    }
    async updateProduct(req, res){
        let data = req.body
        const qry = `
        UPDATE Products
        SET ?
        WHERE prodID = ${data.prodID}
        `

        db.query(qry, [data], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "This Product was updated"
            })
        })
    }
}
export{
    Products
}