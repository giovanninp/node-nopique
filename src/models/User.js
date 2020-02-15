const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: String,
  contact_id: String,
  position_id: String,
  role_id: String,
  device_id: String,
  avatar_url: String
});

module.exports = mongoose.model("User", UserSchema);
