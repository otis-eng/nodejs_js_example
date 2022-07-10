const Vonage = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: "6da628f4",
  apiSecret: "Kk83smlBtcbGS0Di",
});

const from = "Spa Service";
const to = "84799992551";
const text = "Hello otp is: 123123";

function sendQueue() {
  vonage.message.sendSms(from, to, text, (err, responseData) => {
    console.log("sendMessage");
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]["status"] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(
          `Message failed with error: ${responseData.messages[0]["error-text"]}`
        );
      }
    }
  });
}
module.exports = sendQueue;
