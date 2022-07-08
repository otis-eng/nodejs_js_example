const axios = require("axios");

async function sendMessage() {
  const options = {
    method: "POST",
    url: "https://nexmo-nexmo-messaging-v1.p.rapidapi.com/send-sms",
    params: { from: "<REQUIRED>", to: "<REQUIRED>" },
    headers: {
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
      "X-RapidAPI-Host": "nexmo-nexmo-messaging-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

module.exports = sendMessage;
