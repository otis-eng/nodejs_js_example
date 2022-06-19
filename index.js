const express = require("express");
const app = express();
const router = require("./api/router");

app.use(express.json());
app.use("/api", router);
console.log("Hello this is git example nodejs");
app.listen(4000);
