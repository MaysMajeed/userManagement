const mongoose = require("mongoose");

const Users = mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  aboutMe: { type: String },
  isAdmin: { type: Boolean },
});

module.exports = mongoose.model("User", Users);
