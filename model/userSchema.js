const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requierd: true,
  },
  email: {
    type: String,
    requierd: true,
  },
  password: {
    type: Number,
    requierd: true,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
