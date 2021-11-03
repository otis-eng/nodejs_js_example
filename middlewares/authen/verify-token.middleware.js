const jwt = require("jsonwebtoken");


// check user has login

const authenticate = (req,res , next) => {
    const token =  req.header("token");
    try{
        const secretKey = "projectsbanking",
        const decode  = jwt.verify(token,secretKey);
        req.user = decode;
        next();
    }catch(error)  {
        res.staus(401).send({
            message: "Token khong hop le"
        });
    }
};



module.exports = {

    authenticate,
}