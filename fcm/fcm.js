var FCM = require("fcm-node");
const axios = require("axios");

const fcm_token = `AAAAC8gP57U:APA91bFkAlkQXWqdJBb8TaXH-gHgnR3wxK8PWVLQyo-Wv5sRIGtec72jkZ-0ThiSb5WakwdKh7xM-jvco7fb1exQpZTxdKH43b3XjcT3z6j3JnCPAgreNptp9s9MkC8gL0c5Lh3i-lpc`;
console.log(fcm_token);
const fcm = new FCM(fcm_token);

async function sendMessage(messages) {
  try {
    const url = "https://fcm.googleapis.com/fcm/send";
    // Map<String, String> headers = {
    //   HttpHeaders.contentTypeHeader: 'application/json',
    //   'Content-Type': 'application/json',
    //   'authorization':
    //       'Bearer AAAAhX6S7fI:APA91bG49ME9K85FNYrwp3hk6s4EO_39ZFcQxkTdkAbIDEGIl20CpSH3LdZNovoshckni9PX6en28H3Z4TALn21K4wFGkw7qcGQdH6uvF6zGacTPt4cevWJyCriav4g7r-0jcAmHl2Uk'
    // };
    const data = {
      to: "cpsYgh_e9E6ZodL2Uh-nMY:APA91bF9Kj5zngMG1v-daqvy4LfwlR-zYha0PYyhNJ1wsmDc-3UzNw3eJcbrqKtIF_rtGuTpiMS6X6pLujSOYOn3awvtsYuNQwymkVLzS-hY90KTqKcZKO6CkzIZa8C-BLHDU-nj9q2f",
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
        "Bearer AAAAC8gP57U:APA91bFkAlkQXWqdJBb8TaXH-gHgnR3wxK8PWVLQyo-Wv5sRIGtec72jkZ-0ThiSb5WakwdKh7xM-jvco7fb1exQpZTxdKH43b3XjcT3z6j3JnCPAgreNptp9s9MkC8gL0c5Lh3i-lpc", // 'key=YOUR_SERVER_KEY'
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
