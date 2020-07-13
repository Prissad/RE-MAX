const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  email: {
    type: String,
    unique: true,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 1024
  },
  filiale: {
    type: String,
    unique: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("User", userSchema);