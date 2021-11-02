const express = require("express");
const app = express();
const {User} = require("/Users/phankieuphu/Documents/JS/NodeJs/Banking/models/user.js");
const bcryptjs = require("bcryptjs");
const { checkRegister } = require("/Users/phankieuphu/Documents/JS/NodeJs/Banking/middlewares/register/duplicate.register.js");


// create account
const RegsiterUser = async (req,res)=>{
    try{
        const {nameUser,username,password,email,bitrhDay,phoneNumber,typeUser,address,citizendId} = req.body;
        // create string random salt 
        const salt = bcryptjs.genSaltSync(10);
        // hash  password
        const hashPassword = bcryptjs.hashSync(password,salt);
        // rederence method
        const valueCheck = checkRegister(citizendId,username,password);
        if(valueCheck){
            const newUser = await User.create(
                {
                    nameUser,
                    username,
                    hashPassword,
                    email,
                    bitrhDay,
                    phoneNumber,
                    typeUser,
                    address,
                    citizendId
                }
            );
            res.status(201).send(newUser);
        }else{
            res.status(500).send(valueCheck)
        }

    } catch(error){
        res.send(500).send(error);
    }
}


module.exports = {

    RegsiterUser,
}
