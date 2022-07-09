const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();

const postRouter = require("./router/post.router");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config datbase
// const dbURL = process.env.MONGODB_URL;
// mongoose.connect(
//     dbURL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// ).then(
//     () => console.log("connect to database success!")
// ).catch((err) => console.log(err));

app.use("/api/post", postRouter);

app.listen(process.env.PORT, () => {
  console.log("App listen port: " + process.env.PORT);
});
