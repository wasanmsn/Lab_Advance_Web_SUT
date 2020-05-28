const jwt = require('jsonwebtoken')

const KEY = 'MY_KEY'

const authorization  = ((req,res,next) => {
    const token = req.headers['authorization']

    if(token === undefined){
        return res.status(401).json({
            "status":401,
            "message":'Unauthorized'
        })
    }
    else{
        jwt.verify(token,KEY, (err,decode) =>{
            if(err){
                return res.status(401).json({
                    "status":401,
                    "message":'Unauthorized'
                })
            }
            else{
                console.log(decode)
            }
            next()
        })
    }
})

module.exports = authorization