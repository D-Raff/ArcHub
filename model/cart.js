import { connection as db} from "../config/index.js";

class Cart{
    fetchCart(req, res){
        const qry = `
        SELECT userID, productID
        FROM Users;
        `
    }
}