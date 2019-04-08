/**
 * User Controller
 */
exports.index = (req, res) => {
  res.json("Hello user!");
};
exports.create = (req, res, next) => {
  res.json("Create data here");
};
