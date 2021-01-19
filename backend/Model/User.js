const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
  },
  password: String,
  phoneNumber: String,
});

module.exports = User = mongoose.model('User',userSchema);