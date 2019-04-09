const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create user schema
const UserSchema = new Schema({
  nama: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

// Create user model
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
