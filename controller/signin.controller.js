const {User} = require("./models/user.js");
const jwt = requrie('jsonwebtoken');
const bcryptjs = require("bcryptjs");



const signIn = async (req,res) =>{
    const {email,password} = req.body;


    try{
        const UserLogin = await User.finOne({
            where:{
                email
            }
        });
        if(UserLogin){
            const isAuth = bcryptjs.compareSync(password,UserLogin.password);
            if(isAuth){
                const payLoad = {
                    id:UserLogin.id,
                    email:UserLogin.email,
                     
                }
                const serectKey  = "projectsbanking",
                const token = jwt.sign(payLoad,serectKey,{
                    expiresIn: 365 * 24 * 60 * 60,
                });
                res.status(200).send({
                    message : "Dang nhap thanh cong",
                    token
                });
            }else{
                res.status(400).send({
                    message:"Mat khau khong chinh xac",
                })
            }
        }else{
            res.status(400).send({
                message:"Khong tim thay email phu hop",
            })
        }
    }catch(error){
        res.status(500).send(error);
    }
}

module.exports = {
    signIn,
}