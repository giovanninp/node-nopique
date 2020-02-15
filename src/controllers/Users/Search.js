const User = require('../../models/User');
const Position = require('../../models/Position');

module.exports = {
  async index(req, resp) {
    let {
      nickname,
      name,
      email,
      role,
      lat,
      long,
    } = req.query;

    let result;

    if (nickname || name || email || role || (lat && long)) {
      if(lat && long) {
        let posRes;
        posRes = await Position.find({
          location: {
            $near: {
              $geometry: {
                type: "Point",
                coordinates:[long, lat]
              }
            }
          }
        });
        result = [];
        
      }
      else {
        result = await User.find(req.query);
      }
    }
    return resp.json(result);
  }
}