// const { cache } = require("joi");

// const { cache } = require("joi");

// const cache = require("redis");
const userController = async (req, res) => {
  console.log(req.body);
  //cache.set("key", "value");
  const reulst = await cache.get("key");
  return res.json(reulst);
};

module.exports = userController;
