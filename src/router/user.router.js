const {Router} = require("express");
const userRouter = Router();
const {RegsiterUser} = require("../user/register.user");


// create account api
userRouter.get("/register",RegsiterUser
);

module.exports = {
    userRouter
} 