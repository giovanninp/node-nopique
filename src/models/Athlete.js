const mongoose = require('mongoose');

const AthleteSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  training: Boolean,
  looking_for_a_coach: Boolean,
  coaches_ids: [String],
  trains_ids: [String],
  exams_ids: [String],
  communities_ids: [String],
  trains_regs_ids: [String]
});

module.exports = mongoose.model("Athlete", AthleteSchema);
