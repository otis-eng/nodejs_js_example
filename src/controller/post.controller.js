// const Post = require("../model/post");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const createPost = async (req, res) => {
  // let post = Post(req.body);
  console.log(req.file.path);
  return res.json(req.body);
  // const result = await cloudinary.uploader.upload(req.file.path);
  //   console.log(result);
  // post.img = result.secure_url;
  // post.cloudinary_id = result.public_id;
  // post.save().then(
  //     ()=>{
  //       return  res.status(200).send({
  //             ok:true,
  //             message:"Create post success"
  //         })
  //     }
  // ).catch(
  //     (err) =>{
  //         return res.status(400).send({
  //             ok:false,
  //             message:err.message
  //         })
  //     }
  // )
};

module.exports = createPost;
