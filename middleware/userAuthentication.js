import "dotenv/config"
import jwt from "jsonwebtoken";
const {sign, verify, JsonWebTokenError} = jwt


//this allows us to authenticate the user. to create a token we need to use the payload (email add and pass in this case) from the user.
// we create a token and assign it to that user. we save the token in the cookies
function createToken(user){
    return sign({
        emailAdd: user.emailAdd,
        userPassword: user.userPassword
    },
    process.env.SECRET_KEY,// secret key allows us to encrypt our payload. we need to use secret key to create a token
    {
        expiresIn: '1h'
    }
    )
}

function verifyToken(req, res, next){
    //retrieve token from the browser
    const token = req?.headers['Authorization']
    if(token){
        if(verify(token, process.env.SECRET_KEY)){
            next()
        }else{
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials"
            })
        }
    }else {
        res?.json({
            status: res.statusCode,
            msg: "Please log in"
        })
    }
}

// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbEFkZCI6ImRhbW9ucmFmZmVsc0BnbWFpbC5jb20iLCJ1c2VyUHdkIjoiMTIzNCIsImlhdCI6MTcwOTczMDUxNywiZXhwIjoxNzA5NzM0MTE3fQ.LywHI5MTezz-Pbv8nadDYIuHxacxktlD6-HWh7qiKCg"
// let user = verify(token, process.env.SECRET_KEY)

// try {
    
// } catch (error) {
//     if(error instanceof JsonWebTokenError){

//     }
// }

// error instanceof JsonWebTokenError
// console.log(user)

export{
    createToken,
    verifyToken
}