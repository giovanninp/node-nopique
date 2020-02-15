const User = require('../../models/User');

module.exports = {
  async index(req, resp) {
    const users = await User.find();
    return resp.json(users);
  },

  async store(req, resp) {
    let {
      name,
      nickname,
      email,
      role,
      avatar_url = '',
    } = req.body;

    const foundEmail = await User.findOne({
      email
    });

    console.log(foundEmail);

    const foundNickname = await User.findOne({
      nickname
    });

    if (!foundEmail && !foundNickname) {
      const newUser = await User.create({
        name,
        nickname,
        email,
        role,
        avatar_url,
      });

      return resp.json(newUser);
    } else if (foundEmail) {
      return resp.json({
        error: 'email'
      });
    } else if (foundNickname) {
      return resp.json({
        error: 'nickname'
      });
    } else {
      return resp.json({
        error: 'something wrong'
      });
    }
  },

  async update(req, resp) {
    const user = await User.findByIdAndUpdate(req.query.id, req.query);
    if (user) {
      const newUser = await User.findById(req.query.id);
      return resp.json(newUser);
    } else {
      return resp.json(user);
    }
  },

  async delete(req, resp) {
    const user = await User.findByIdAndRemove(req.query.id);
    if (user) {
      return resp.json({
        message: "deleted"
      });
    }
    return resp.json({
      message: "user not available"
    });
  }
}