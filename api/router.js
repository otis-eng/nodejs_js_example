const express = require("express");
const routers = express.Router();

const UserValidate = require("../joi/user.joi");
const userController = require("./controller");

routers.post("/user", UserValidate, userController);

module.exports = routers;
