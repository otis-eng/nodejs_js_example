const multer = require("multer")
const path  = require("path")

module.exports.multer = multer({
    storage: multer.diskStorage({}),
})

module.exports.fristMulter = (req,res,next) =>{
    let ext = path.extname(req.file.originalname);
    if((ext !== "jpg" && ext !== ".jpeg" && ext !==".png")){
        return res.status(400).send({message: "Type img is not support"})
    }
    next()
}