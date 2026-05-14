const { celebrate, Joi, errors } = require('celebrate');

const validateUserBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const validatePlayBody = celebrate({
  body: Joi.object().keys({
    title: Joi.string().required(),
    category: Joi.string().required(),
    difficulty: Joi.string().required(),
    description: Joi.string().required(),
    example: Joi.string().allow(''),
    image: Joi.string().allow(''),
  }),
});

const validateId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
});

module.exports = { validateUserBody, validateLogin, validatePlayBody, validateId, errors };