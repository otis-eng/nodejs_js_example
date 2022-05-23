const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const router = require("./src/router");
require("./src/sendToTele");

app.use("/api",router);


console.log("Hello this is git example nodejs");
app.listen(4000);
