const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const {router} = require("./src/router");



app.use(express.json());
app.use('/api',router);
app.use(bodyParser.json());
app.listen(4000);
