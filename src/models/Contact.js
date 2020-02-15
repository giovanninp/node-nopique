const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  phone: String,
  telephone: String,
  user_id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Contact", ContactSchema);
