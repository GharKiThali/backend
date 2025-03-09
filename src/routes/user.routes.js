const express= require('express');
const { register,  userLogin,  registerShow, loginShow } = require('../controller/userControllers');
const router= express.Router();


router.get("/create",registerShow)
router.post('/create',register)


router.get("/login",loginShow)
router.post('/login',userLogin)

module.exports=router;