const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: [2, "First name must be at least 2 characters long"],
    },
    lastName: {
      type: String,
      min: [2, "Last name must be at least 2 characters long"],
    },
    emailId: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    photoURL: {
      type: String,
    },
    about: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User =  mongoose.model("User", userSchema);
module.exports = User;
