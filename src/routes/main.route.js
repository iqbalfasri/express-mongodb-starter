const Router = require("express").Router();

/** Import Controllers */
const User = require("../controllers/User.controller");

/** Import Middleware for validation data */
const { validations, schemaValidations } = require("../middleware/validation");

Router.route("/")
  .get(User.index)
  .post(validations(schemaValidations.users), User.create);
Router.route("/:_id")
  .get(User.detail)
  .put(validations(schemaValidations.users), User.update)
  .patch(validations(schemaValidations.users), User.update)
  .delete(User.delete);

module.exports = Router;
