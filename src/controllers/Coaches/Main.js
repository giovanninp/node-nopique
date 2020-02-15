const Coach = require('../../models/Coach');
const User = require('../../models/User');
const stringToArray = require('../../utils/stringToArray');

module.exports = {
  async index(req, resp) {
    const coaches = await Coach.find();
    return resp.json(coaches);
  },

  async store(req, resp) {
    let {
      user_id,
      reg_num,
      looking_for_a_athlete = false,
      looking_for_a_gym = false,
      available = false,
      specs = '',
    } = req.body;

    specs = stringToArray(specs);

    const foundUser = await User.findById(user_id);

    const foundCoach = await Coach.findOne({
      user_id
    });

    if (foundUser && !foundCoach) {
      const newCoach = await Coach.create({
        user_id,
        reg_num,
        looking_for_a_athlete,
        looking_for_a_gym,
        available,
        specs,
        valid: false,
        athletes_ids: [],
        trains_ids: [],
        communities_ids: []
      });

      const user = await User.findByIdAndUpdate(user_id, {
        role: 'coach',
        role_id: newCoach._id
      });

      return resp.json({
        user_content: user,
        coach_content: newCoach
      });
    }
  },

  async update(req, resp) {
    let coach = await Coach.findByIdAndUpdate(req.query.id, req.query);
    coach = await Coach.findById(req.query.id);
    return resp.json(coach);
  }
}