const User = require('../../models/User');
const Train = require('../../models/Train');

module.exports = {
  async index(req, resp) {
    const {
      user_id,
      train_id
    } = req.query;

    let result = {
      user: {},
      trains: []
    }

    if (user_id && train_id) {} else if (user_id && !train_id) {
      result.user = await User.findById(user_id);
      result.trains = await Train.find({
        athletes_ids: {
          $in: user_id
        }
      });
    }
    return resp.json(result);
  }
}