const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("./src/module/tele.bot.js");



console.log("Hello this is git example nodejs");
app.listen(4000);
