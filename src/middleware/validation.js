const Joi = require("joi");
const code_response = require("../lib/code-response");

/**
 * Fungsi untuk mem-validasi data
 */
exports.validations = schema => {
  return (req, res, next) => {
    let data = req.body;
    Joi.validate(data, schema, (err, value) => {
      if (err) {
        // send status 422 error response
        res.status(422).send({
          code: code_response.CODE_BAD_REQUEST,
          status: "Invalid request data",
          message: err.message
        });
      } else {
        next();
      }
    });
  };
};

/**
 * Skema data yang akan divalidasi
 */
exports.schemaValidations = {
  users: Joi.object().keys({
    nama: Joi.string().required(),
    email: Joi.string().required()
  })
};
