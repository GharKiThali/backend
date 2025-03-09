const postModel = require("../models/profile.model")
const userModel = require("../models/user.model")

const createPostView= async(req,res)=>{
    const allPost = await postModel.find()
    res.render('create-post', {allPost})
}



const createPost = async (req,res)=>{
 const {media,caption, title} =req.body;

console.log(req.user);

 const post = await postModel.create({ title,media, caption,author:req.user.id})
await userModel.findOneAndUpdate({
    _id:req.user.id
},{
    $push:{
        posts:post._id
    }
    
})
res.send(post)

}

module.exports={createPostView,createPost};