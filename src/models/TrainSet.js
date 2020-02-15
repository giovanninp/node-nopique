const mongoose = require('mongoose');

const TrainSetSchema = new mongoose.Schema({
  train_id: {
    type: String,
    required: true
  },
  exercises_ids: [String],
  rest_time: Number,
  reps: String,
  done: Boolean,
  cadency: [Number]
});

module.exports = mongoose.model("TrainSet", TrainSetSchema);