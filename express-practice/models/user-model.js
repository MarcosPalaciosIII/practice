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
      required: [true, "Email is required"],
      match: [/.+@.+/, "emails must contain an @ sign"]
    },
    encryptedPassword: {
      type: String,
      required: [true, "Please create a password"]
    }
  },
  {
    // add "createdAt" and "updatedAt" fields
    timestamps: true
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
