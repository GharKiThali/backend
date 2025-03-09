const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    mobile:{
        type:Number,
    },
    address:{
        type:String,
    },
    password:{
        type:String,
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }]

}) 
const userModel = mongoose.model("user",userSchema)
module.exports=userModel;