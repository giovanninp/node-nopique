const User = require('../../models/User');
const Coach = require('../../models/Coach');

module.exports = {
  async index(req, resp) {
    const {
      user_id,
      coach_id
    } = req.query;

    let result = {
      user: {},
      coach: {}
    }

    if (user_id || coach_id) {
      if (user_id && coach_id) {
        result.user = await User.findById(user_id);
        result.coach = await Coach.findById(coach_id);
        if (result.user && !result.coach) {
          result.coach = await Coach.find({
            user_id
          });
          if (!result.coach) {
            result.coach = await Coach.create({
              user_id
            });
            result.user = await User.findByIdAndUpdate(user_id, {
              role: 'coach',
              role_id: result.coach._id
            });
          }
        } else if (!result.user) {
          result.user = await User.find(result.coach.user_id);
        }
      }
      if (user_id) {
        result.user = await User.findById(user_id);
        result.coach = (
          result.user.role === 'coach' && result.user.role_id.length > 2 ? await Coach.findById(result.user.role_id) : null
        );
        if (!result.coach) {
          result.coach = await Coach.create({
            user_id
          });
          result.user = await User.findByIdAndUpdate(user_id, {
            role: 'coach',
            role_id: result.coach._id
          });
        }
      } else {
        result.user = await User.find({role_id:coach_id});
        result.coach = await Coach.findById(coach_id);
      }
    }
    return resp.json(result);
  }
}