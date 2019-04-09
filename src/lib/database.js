const process = require("process");
const mongoose = require("mongoose");

/**
 * Auto switch
 * jika env development akan dialihkan ke database local
 * jika env production maka dialihkan ke cloud database
 */
const setUriDatabase =
  process.env.NODE_ENV == "development"
    ? process.env.URI_DEV_DB
    : process.env.URI_PROD_DB;

/**
 * Fungsi untuk mengkoneksikan database
 * yang nanti akan di export ke app.js
 */
module.exports.connect = () => {
  mongoose.Promise = global.Promise;
  mongoose.set("useCreateIndex", true);
  mongoose
    .connect(setUriDatabase, { useNewUrlParser: true })
    .then(() => console.log("Berhasil konek ke database"))
    .catch(() => console.log("Gagal konek ke database"));
};