const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    name: String,
    muscular_group: String,
    img_url: String,
    gif_url: String,
    video_url: String
});

module.exports = mongoose.model("Exercise",ExerciseSchema);