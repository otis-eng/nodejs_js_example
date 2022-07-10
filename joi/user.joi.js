const Joi = require("joi");

const UserValidate = async (req, res, next) => {
  let data = req.body;
  const UserSchema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    name: Joi.string().min(2).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    }),
  }).unknown();
  const result = await UserSchema.validate(data);
  if (result.error) {
    return res
      .status(200)
      .send({ success: false, result: result.error.message });
  }
  next();
};

module.exports = UserValidate;
