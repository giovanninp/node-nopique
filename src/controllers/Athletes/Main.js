const Ahtlete = require('../../models/Athlete');
const User = require('../../models/User');

module.exports = {
  async index(req, resp) {
    const athletes = await Ahtlete.find();
    return resp.json(athletes);
  },

  async store(req, resp) {
    let {
      user_id,
      looking_for_a_coach = false,
    } = req.body;

    const foundUser = await User.findById(user_id);

    const foundAthlete = await Ahtlete.findById(user_id);

    if (foundUser && !foundAthlete) {
      const newAthlete = await Ahtlete.create({
        user_id,
        looking_for_a_coach,
        training: false,
        coaches_ids: [],
        trains_ids: [],
        exams_ids: [],
        communities_ids: [],
        trains_regs_ids: []
      });

      const user = await User.findByIdAndUpdate(user_id, {
        role: 'athlete',
        role_id: newAthlete._id
      });

      return resp.json({
        user_content: user,
        role_content: newAthlete
      });
    } else {
      return resp.json({
        error: "unavailable user"
      });
    }
  },

  async update(req, resp) {
    let athlete = await Ahtlete.findByIdAndUpdate(req.query.id, req.query);
    athlete = await Ahtlete.findById(req.query.id);
    return resp.json(athlete);
  },

  async delete(req, resp) {
    let foundAthlete = await Ahtlete.findByIdAndDelete(req.query.athlete_id);
    let result = {
      message: 'athlete not found'
    };
    if (foundAthlete) {
      result.message = 'athlete deleted';
    }
    return resp.json(result);
  }
}