const mongoose = require('mongoose');

const CoachSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  reg_num: String,
  valid: Boolean,
  looking_for_a_athlete: Boolean,
  looking_for_a_gym: Boolean,
  available: Boolean,
  specs: [String],
  athletes_ids: [String],
  trains_ids: [String],
  communities_ids: [String]
})

module.exports = mongoose.model("Coach", CoachSchema);
