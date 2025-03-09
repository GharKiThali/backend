const jwt = require('jsonwebtoken')

const author = async(req,res,next)=>{
 try{
    const token  = req.cookies.token ||  req.headers.authorization?.split(" ")[1]

    if(!token){
        res.status(401).json({
            message:"unauthorized"
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SEC)
    req.user=decoded
    next()
 }
 catch{
    res.status(401).json({
        message:"unauthorized"
    })
 }
}
module.exports=author;