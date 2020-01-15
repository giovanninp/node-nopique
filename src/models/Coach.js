const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const CoachSchema = new mongoose.Schema({
    name: String,
    nickname:String,
    phone_number:String,
    birthdate:{
        day:Number,
        month:Number,
        year:Number
    },
    reg_num:String,
    avatar_url: String,
    bio: String,
    specs: [String],
    athletes_ids :[String],
    trains_ids: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model("Coach",CoachSchema)