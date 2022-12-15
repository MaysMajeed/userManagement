const mongoose = require("mongoose");

const Users = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    aboutYou: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", Users);
