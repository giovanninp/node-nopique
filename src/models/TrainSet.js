const mongoose = require('mongoose');

const TrainSet = new mongoose.Schema({
    title: String,
    reps: String,
    rest_time: Number,
    intensity: Number,
    obs: String,
    exercises_ids:[String]
});

module.exports = mongoose.model("TrainSet",TrainSet);