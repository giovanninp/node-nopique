const mongoose = require('mongoose');

const TrainSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: String,
  athletes_ids: [String],
  coaches_ids: {
    type: [String],
    required: true
  },
  trains_sets_ids: [String],
  obs: String,
  v: [String],
  interpolation_time: Number,
  counter: Number,
  img_url: String
});

module.exports = mongoose.model("Train", TrainSchema);
