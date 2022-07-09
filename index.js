const express = require("express");
const app = express();
const redis = require("redis");
const router = require("./api/router");
const jsonParser = express.json();

// const client = redis.createClient();
// client.connect("connect", function () {
//   console.log("Connect success");
// });
// client.on("error", (err) => {
//   console.log("connect error", err.message);
// });
// client.on("connect", function () {
//   console.log("connect redis");
// });

// global.cache = client;
app.use(express.json());

app.use(jsonParser);

app.use("/api", router);
console.log("Hello this is git example nodejs");
app.listen(4000);

// {
//   url: `redis-19457.c302.asia-northeast1-1.gce.cloud.redislabs.com:`,
//   port: 19457,
//   password: `4f9fQnG7IYb63JsD4CGeWcSvwl2i13gm`,
// }
