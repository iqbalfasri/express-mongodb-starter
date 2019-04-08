const Router = require("express").Router();

/** Import Controllers */
const User = require("../controllers/User.controller");

/** Import Middleware for validation data */
const { validations, schemaValidations } = require("../middleware/validation");

Router.route("/")
  .get(User.index)
  .post(validations(schemaValidations), User.create);

module.exports = Router;
