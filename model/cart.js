import { connection as db } from "../config/index.js";
// import { verifyToken } from "../middleware/userAuthentication.js";
import jwt from 'jsonwebtoken';
import { config } from "dotenv";

const { verify } = jwt;

config();

import url from 'url';
import { verifyToken } from "../middleware/userAuthentication.js";

class Cart {
  fetchCart(req, res) {
    const params = url.parse(req.url);

    let token = params.query.split('=').at(-1);

    console.log(token);

    try {
        let user = verify(token, process.env.SECRET_KEY)
        console.log( "Object: ", user.emailAdd);

        const qry = `
        SELECT c.userID, c.ProductID, p.ProdImg, p.ProductName, p.Category, p.price, count(c.ProductID) as quantity, u.emailAdd
        FROM Cart c
        LEFT JOIN Products p ON p.ProductID = c.ProductID
        LEFT JOIN Users u ON u.userID = c.userID
        WHERE emailAdd = ?
        group by p.ProductID;
            `
            db.query(qry, [user.emailAdd], (err, result)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    result
                })
            })

    } catch(e) {
        console.log(e)
        res.json({
            status: 401,
            msg: "Unauth"
        })
    }
    

  }
}

export{
    Cart
}