const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author_id: String,
  muscular_groups: {
    type: [String],
    required: true
  },
  description: String,
  imgs_urls: [String],
  gifs_urls: [String],
  video_url: String
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
