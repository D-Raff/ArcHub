import { createPool } from "mysql";

import "dotenv/config"

let connection = createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_UserName,
    password: process.env.DB_UserPass,
    multipleStatements: true, //this allows the dba to install multiple values (rows) at the same time
    connectionLimit: 30
})
export{
    connection
}