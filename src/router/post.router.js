const express = require("express");
const router = express.Router();
const  postController = require("../controller/post.controller")
const uploadImg = require("../utils/multer")

router.post("/createPost",uploadImg.multer.single("image"),uploadImg.fristMulter,postController);

module.exports = router;