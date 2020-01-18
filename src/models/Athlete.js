const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const AthleteSchema = new mongoose.Schema({
    name: String,
    nickname:String,
    phone_number:String,
    birthdate:{
        day:Number,
        month:Number,
        year:Number
    },
    coach_id:String,
    training: Boolean,
    looking_for_a_coach: Boolean,
    avatar_url: String,
    bio: String,
    exams_ids: [String],
    trains_ids: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model("Athlete",AthleteSchema);