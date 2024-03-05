import "dotenv/config"
import jwt from "jsonwebtoken";
const {sign, verify} = jwt


//this allows us to authenticate the user. to create a token we need to use the payload (email add and pass in this case) from the user.
// we create a token and assign it to that user. we save the token in the cookies
function createToken(user){
    return sign({
        emailAdd: user.emailAdd,
        userPwd: user.userPwd,
    },
    process.env.SECRET_KEY,// secret key allows us to encrypt our payload. we need to use secret key to create a token
    {
        expiresIn: '1h'
    }
    )
}

function verifyToken(req, res, next){
    //retrieve token from the browser
    // the quesstion mark is to avoid null or undefined because we don't have the value yet
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

export{
    createToken,
    verifyToken
}