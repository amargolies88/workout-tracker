const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    required: "username is required!!",
    trim: true
  },
  password: {
    type: String, 
    required: "password is required!!",
    validate: [({ length }) => length >= 6, "password should be at least 6 character"]
    // validate: [
    //   (value) => { //value = the value that we are trying to insert to the password field
    //     const length = value.length;
    //     return length >= 6;
    //   },
    //   "password should be at least 6 characters"
    // ]
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Must be a valid email address"]

  },
  userCreated: {
    type: Date,
    default: Date.now
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
