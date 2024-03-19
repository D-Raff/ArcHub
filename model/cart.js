import { connection as db } from "../config/index.js";
import { config } from "dotenv";

config();

class Cart {
  fetchCart(req, res) {

    try {
      const qry = `
        SELECT c.OrderID, c.ProductID, p.ProdImg, p.ProductName, p.Category, count(c.ProductID) as quantity, p.price * count(c.ProductID) as totalQty
        FROM Cart c
        LEFT JOIN Products p ON p.ProductID = c.ProductID
        WHERE userID = ?
        group by p.ProductID;
        `;
      db.query(qry, [req.body.userID], (err, result) => {
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
    `;
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
    WHERE userID = ?;
    `;
    // access the cookies and grab the emailAdd
    db.query(qry, [req.body.userID], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "the cart was cleared",
      });
    });
  }
  async addToCart(req, res) {
    const qry = `
    INSERT INTO Cart
    SET ?
    `;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Added to cart",
      });
    }); 
  }
}

export { Cart };
