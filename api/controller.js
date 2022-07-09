

const userController = async (req, res) => {
  var params = {
    originator: "TestMessage",
    recipients: ["+84799992551"],
    body: "This is a test message",
  };

  messagebird.messages.create(params, function (err, response) {
    if (err) {
      return res.status(err.statusCode || 400).json(err.message);
    }
    return res.json(response);
  });
};

module.exports = userController;
