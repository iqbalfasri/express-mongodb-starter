const User = require("../models/User.model");
const code_response = require("../lib/code-response");

/** 
 * Mengamil semua data
 */
exports.index = (req, res) => {
  User.find().then(user => {
    res.status(200).send({
      code: code_response.CODE_SUCCESS,
      message: "success",
      data: user
    })
  }).catch(err => {
    res.status(500).send({
      code: code_response.CODE_SERVER_ERROR,
      message: "internal server error"
    })
  })
};

/**
 * Menambahkan data baru
 */
exports.create = (req, res) => {
  const { nama, email } = req.body;
  const createUser = new User({
    nama: nama,
    email: email
  });

  // Save document to database
  createUser.save().then(user => {
    res.status(201).send({
      code: code_response.CODE_SUCCESS,
      message: "success",
      data: user
    });
  }).catch(err => {
    res.status(500).send({
      code: code_response.CODE_SERVER_ERROR,
      message: "internal server error"
    })
  })
};
