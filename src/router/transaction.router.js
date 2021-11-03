const {Router}  = require("express");
const transactionRouter = Router();

transactionRouter.get("/",(req,res)=>{
    res.send("Transaction router");
});

module.exports = {
    transactionRouter
}