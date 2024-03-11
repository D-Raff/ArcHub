import { userRouter, express } from "./controller/userController.js";
import {productRouter} from "./controller/productController.js";
import { cartRouter } from "./controller/cartController.js";
import cookieParser from "cookie-parser";
import {errorHandling} from './middleware/ErrorHandling.js';
import path from 'path';
import cors from "cors"
import { config } from "dotenv";
import { verifyToken } from "./middleware/userAuthentication.js";
config()

const app = express()
const port= +process.env.PORT || 4000

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "https://archub-49wy.onrender.com/");
    res.header("Access-Control-Allow-Credentials", "true" );
    res.header("Access-Control-Allow-Methods", "*" ); //allows all the http methods
    res.header("Access-Control-Request-Methods", "*" ); //alllows request methods
    res.header("Access-Control-Allow-Headers", "*" ); // saving cookies on headers therefore we need to allow the users to access headers
    res.header("Access-Control-Expose-Headers", "Authorization" );
    next();
})
app.use(
    express.static("./static"),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors({
        origin: "http://localhost:8080",
        credentials: true
    })
)
app.get('^/$|/archub',(req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/cart', cartRouter)
app.get('/verify',verifyToken,(req,res)=>{
    console.log(req.user);
    res.send("Hey you logged in")
})
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})