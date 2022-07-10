const firebase = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

// The Firebase token of the device which will get the notification
// It can be a string or an array of strings

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://spa-service-be443.firebaseio.com",
});

const userController = async (req, res) => {
  try {
    const firebaseToken = "";
    const payload = {
      notification: {
        title: "Notification Title",
        body: "This is an example notification",
      },
    };

    const options = {
      priority: "high",
      timeToLive: 60 * 60 * 24, // 1 day
    };

    firebase
      .messaging()
      .sendToDevice(firebaseToken, payload, options)
      .then((value) => {
        return res.json(value);
      });
  } catch (err) {
    return res.json(err.message);
  }
};

module.exports = userController;
