// const { cache } = require("joi");

// const sendMessage = require("../fcm/fcm");
const sendMessage = require("../api/vogane/voagen.api");

// const { cache } = require("joi");

// const cache = require("redis");
const userController = async (req, res) => {
  // console.log(req.body);
  // //cache.set("key", "value");
  // const reulst = await cache.get("key");
  try {
    await sendMessage();
    return res.status(200).send("faild");
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = userController;
