import { Products } from "./Products.js";
import { Users } from "./users.js";
import { Cart } from "./cart.js"

let products = new Products()
let users = new Users()
let cart = new Cart()
export{
    users,
    products,
    cart
}