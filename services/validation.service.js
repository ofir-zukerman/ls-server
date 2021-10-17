const Joi = require("joi");

// handle create user validation schema
const createUserSchema = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "il"] } })
    .required(),
  password: Joi.string().min(4).required(),
  role: Joi.string().required(),
});

const isCreateValid = (data) => {
  const { error } = createUserSchema.validate(data);
  return error || null;
};

module.exports = {
  isCreateValid,
};
