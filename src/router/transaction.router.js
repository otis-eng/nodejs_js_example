const {Router}  = require("express");
const transactionRouter = Router();

transactionRouter.get("/",(req,res)=>{
    console.log("Transaction router");
});

module.exports = {
    transactionRouter
}