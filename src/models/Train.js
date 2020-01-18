const mongoose = require('mongoose');

const Train = new mongoose.Schema({
    title: String,
    coach_id: String,
    athlete_id: String,
    interpolation_time: String,
    notes: String,
    sets_ids:[String]
});

module.exports = mongoose.model("Train",Train);