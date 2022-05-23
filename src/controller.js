const teleBot = require("./sendToTele.js");

const getMessage = async (req, res) => {
  let message = req.params.message;
  if (message) {
    teleBot.onMessage(message);
    return res.status(200).send({ message: message, success: true });
  } else {
    message = "You no input message";
    teleBot.onMessage(message);
    return res.status(200).send({ message: message, success: true });
  }
};

module.exports = { getMessage };
