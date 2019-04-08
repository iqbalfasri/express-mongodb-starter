const Router = require('express').Router();

/** Import Controllers */
const User = require('../controllers/User.controller')

Router.route('/')
  .get(User.index)


module.exports = Router;