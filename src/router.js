const express = require("express");
const router = express.Router();
const controller = require("./controller");

console.log("This is router");
router.get("/", controller.getMessage);
module.exports = router;
