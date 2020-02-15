const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const PositionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  country: String,
  state: String,
  city: String,
  neighbor: String,
  postal_code: String,
  location: {
    type: PointSchema,
    index: '2dsphere'
  },
})

module.exports = mongoose.model("Position", PositionSchema);
