const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PostSchema = new Schema({

    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true   
    },
    img:{
        type:String,
        required:false
    },
    cloudinary_id:{
        type:String,
        required:false
    }

})

const Post = mongoose.model("Post",PostSchema);
module.exports = Post;