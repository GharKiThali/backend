const express =require('express');
const { createPost, createPostView } = require('../controller/profileController');
const router = express.Router();
const author = require('../middleware/user.middleware')

router.get('/create',author,createPostView)
router.post('/create',author,createPost)

module.exports=router;