const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

// User registershow
const registerShow = async(req,res)=>{
    const user = await userModel.find()
    res.render("index",{user})
}



// User Register✅
const register=async(req,res)=>{
    const {name,email,number,address,password} = req.body;

const userExits =await userModel.findOne({email})
if(userExits){
    return res.status(501).json({message:"userExits"})
}

const hashPassword = await bcrypt.hash(password, 10)
   const user = await userModel.create({
        name, 
        email,
        number,
        address,
        password: hashPassword,
    })

    
const token = jwt.sign({id: user._id},  process.env.JWT_SEC)
    
//  Cookie me set kiya token then redirect karenge login me 
    res.cookie("token", token)
    res.redirect("/user/login")
}



//  login
const loginShow = async(req,res)=>{
    res.render("login")
}

// User login

const userLogin = async (req,res)=>{

const {email,password}= req.body;

const userExits = await userModel.findOne({email})

if(!userExits){
return res.status(501).json({message:"invalid username and password"})
}

// console.log(password, userExits.password, "User Password")

const ismatch = await bcrypt.compare(password,userExits.password)

if(!ismatch){
    return res.status(501).json({message:"invalid username or password"})
} 

const token = jwt.sign({id: userExits._id}, process.env.JWT_SEC, {
    expiresIn:"1d",
});
//  Cookie me set kiya token then redirect karenge dashboard me
res.cookie("token",token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1 day 
});

res.redirect("/post/create")

// res.status(201).json({message:"login successfully",user:userExits,token:token})

}

module.exports = {registerShow,userLogin, register, loginShow}

