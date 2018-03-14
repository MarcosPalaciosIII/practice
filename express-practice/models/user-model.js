const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Please select a username"]
    },
    email: {
      type: String,
      required: [true, "Please add a valid email address"]
    },
    encryptedPassword: {
      type: String,
      required: [true, "Please create a password"],
      match: [/.+@.+/, "emails must contain an @ sign"]
    }
  },
  {
    // add "createdAt" and "updatedAt" fields
    timestamps: true
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
