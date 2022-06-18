var FCM = require("fcm-node");

const fcm_token = process.env.FCM_TOKEN;
const fcm = new FCM(fcm_token);
