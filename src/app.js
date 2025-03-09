const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
const app = express();
const userRoutes=require('./routes/user.routes')
const postRoutes= require('./routes/profile.routes')
const cookieParser =require("cookie-parser")
// npm install dotenv (command run)
// npm i cookie-parser
// npm i jsonwebtoken
// npm i bcryptjs


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs")
app.set("views",'src/views')


app.use('/user',userRoutes);
app.use('/post',postRoutes);

module.exports=app;