
const {Router} = require("express");
const {userRouter} = require("/Users/phankieuphu/Documents/JS/NodeJs/Banking/src/router/user.router.js");
const {transactionRouter} = require("./transaction.router");
const router = Router();



router.use("/user",userRouter);
router.use("/transaction",transactionRouter);

module.exports = {
    router
}