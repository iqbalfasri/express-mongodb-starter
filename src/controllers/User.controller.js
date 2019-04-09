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

/**
 * Melihat detail user
 */
exports.detail = (req, res) => {
  const { _id } = req.params;
  User.findOne({ _id: _id }).then(user => {
    res.status(200).send({
      code: code_response.CODE_SUCCESS,
      message: "success",
      data: user
    })
  }).catch(err => {
    res.status(500).send({
      code: code_response.CODE_SERVER_ERROR,
      message: err.message
    })
  })
}

/**
 * Mengubah data / document
 */
exports.update = (req, res) => {
  const { _id } = req.params;
  const { nama, email } = req.body;
  const updatedData = {};
  
  if (nama) {
    updatedData.nama = nama;
  }

  if (email) {
    updatedData.email = email;
  }

  User.findOneAndUpdate({ _id: _id }, updatedData).then(user => {
    res.status(201).send({
      code: code_response.CODE_SUCCESS,
      message: "success",
      data: user
    })
  }).catch(err => {
    res.status(500).send({
      code: code_response.CODE_SERVER_ERROR,
      message: err.message
    })
  })

}

/**
 * Menghapus data / document
 */
exports.delete = (req, res) => {
  const { _id } = req.params;
  User.findByIdAndRemove({ _id: _id }).then(() => {
    res.status(201).send({
      code: code_response.CODE_SUCCESS,
      message: "success",
    })
  }).catch(err => {
    res.status(500).send({
      code: code_response.CODE_SERVER_ERROR,
      message: err.message
    })
  })
}