var FCM = require("fcm-node");
const axios = require("axios");

const fcm_token = ``;
console.log(fcm_token);
const fcm = new FCM(fcm_token);

async function sendMessage(messages) {
  try {
    const url = "https://fcm.googleapis.com/fcm/send";
    const data = {
      to: "",
      notification: {
        title: "test chat notifications",
        body: "bode test notifications",
      },
      data: {
        type: "0rder",
        id: "28",
        click_action: "FLUTTER_NOTIFICATION_CLICK",
      },
    };
    const headers = {
      "content-type": "application/json",
      Authorization:
        "Bearer ", // 'key=YOUR_SERVER_KEY'
    };
    const result = await axios.post(url, {
      data,
      headers,
    });
    // body = jsonEncode({body})
    // const response = await http.post(Uri.parse(url),
    //     headers: headers, body: json.encode(data));

    // const value = await fcm.send(message, function (err, response) {
    //   if (err) {
    //     console.log("Something has gone wrong!");
    //     console.log(err);
    //   } else {
    //     console.log("Successfully sent with response: ", response);
    //   }
    // });
    console.table(result);
    return result;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
}

module.exports = sendMessage;
