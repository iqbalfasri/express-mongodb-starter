const Joi = require("joi");

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
