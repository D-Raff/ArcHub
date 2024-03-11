import { connection as db } from "../config/index.js";
// import { verifyToken } from "../middleware/userAuthentication.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

const { verify } = jwt;

config();

import url from "url";

class Cart {
  fetchCart(req, res) {
    const params = url.parse(req.url);
    let token = params.query.split("=").at(-1);
    try {
      let user = verify(token, process.env.SECRET_KEY);
      const qry = `
        SELECT c.OrderID, c.userID, c.ProductID, p.ProdImg, p.ProductName, p.Category, p.price, count(c.ProductID) as quantity, u.emailAdd
        FROM Cart c
        LEFT JOIN Products p ON p.ProductID = c.ProductID
        LEFT JOIN Users u ON u.userID = c.userID
        WHERE emailAdd = ?
        group by p.ProductID;
            `;
      db.query(qry, [user.emailAdd], (err, result) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          result,
        });
      });
    } catch (e) {
      res.json({
        status: res.statusCode,
        msg: "There was an error when fetching your cart. Please try again later",
      });
    }
  }
  async deleteProduct(req, res) {
    const qry = `
    DELETE FROM Cart
    WHERE OrderID = ${req.params.id};
    `
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "This product was deleted",
      });
    });
  }
  async clearCart(req, res) {
    const qry = `
    DELETE FROM Cart
    WHERE emailAdd = ?;
    `
    // access the cookies and grab the emailAdd
    db.query(qry, [user.emailAdd], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "This product was deleted",
      });
    });
  }

}

export { Cart };
