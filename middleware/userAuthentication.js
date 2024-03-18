import "dotenv/config"
import jwt from "jsonwebtoken";
const {sign, verify,} = jwt


//this allows us to authenticate the user. to create a token we need to use the payload (email add and pass in this case) from the user.
// we create a token and assign it to that user. we save the token in the cookies
function createToken(user){

    return sign({
        userID: user.userID,
        userRole: user.userRole,
        emailAdd: user.emailAdd,
        userPassword: user.userPassword,
    },
    process.env.SECRET_KEY,// secret key allows us to encrypt our payload. we need to use secret key to create a token
    {
        expiresIn: '1h'
    }
    )
}

function verifyToken(req, res, next){
    //retrieve token from the browser
    
    const token = req?.headers['authorization'];
    // const token = req?.headers.authorization || this does the same as the above code
    // const token = req?.cookies['VerifiedUser']
    if(token){
        if(verify(token, process.env.SECRET_KEY)){
            verify(token, process.env.SECRET_KEY,(err,user)=>{
                if (err) throw err
                req.body.userID = user.userID
            })
            next()
        }else{
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials"
            })
        }
    }else{
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