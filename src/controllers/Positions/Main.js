const Position = require('../../models/Position');
const User = require('../../models/User');
const locationPoint = require('../../utils/locationPoint');

module.exports = {
  async index(req, resp) {
    const positions = await Position.findOne();
    return resp.json(positions);
  },
  async store(req, resp) {
    let {
      user_id = "",
        country,
        state,
        city,
        neighbor,
        postal_code,
        lat = "0",
        long = "0"
    } = req.body;

    const location = locationPoint(lat, long);

    console.log(location);

    user_id = user_id.trim();

    if (user_id.length < 1) {
      return resp.json({
        error: "unavaible user"
      });
    }

    const foundUser = await User.findById(user_id);

    if (user_id, country, state, city, neighbor, foundUser) {
      const newPosition = await Position.create({
        user_id,
        country,
        state,
        city,
        neighbor,
        postal_code,
        location
      });

      console.log(newPosition);

      await User.findOneAndUpdate(user_id, {
        position_id: newPosition._id
      });

      return resp.json(newPosition);
    } else {
      return resp.json({
        error: "illegal entry"
      });
    }
  },

  async update(req, resp) {
    let position = await Position.findByIdAndUpdate(req.query.id, req.query);
    position = await Position.findById(req.query.id);
    return resp.json(position);
  }
}