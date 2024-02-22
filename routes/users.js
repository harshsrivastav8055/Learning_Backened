const { mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
