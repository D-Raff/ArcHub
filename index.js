import { userRouter, express } from "./controller/userController.js";
import {productRouter} from "./controller/productController.js";
import cookieParser from "cookie-parser";
import {errorHandling} from './middleware/ErrorHandling.js';
import path from 'path';
import cors from "cors"
import { config } from "dotenv";
import exp from "constants";
config()

const app = express()
const port= +process.env.PORT || 4000

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*" /*the star must be replaced with the firebase hosted link*/);
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
    cors()
)
app.get('^/$|/archub',(req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})