const Contact = require('../../models/Contact');
const User = require('../../models/User');

module.exports = {
  async index(req, resp) {
    const contacts = await Contact.findOne();
    return resp.json(contacts);
  },
  async store(req, resp) {
    let {
      phone,
      telephone = "",
      user_id = ""
    } = req.body;

    user_id = user_id.trim();

    const foundPhone = await Contact.findOne({
      phone
    });

    if (foundPhone) {
      return resp.json({
        error: "already exists"
      })
    }

    if (user_id.length > 1) {
      const foundUser = await User.findById(user_id);

      if (foundUser) {
        const newContact = await Contact.create({
          phone,
          telephone,
          user_id
        });
        const user = await User.findByIdAndUpdate(user_id, {
          contact_id: newContact._id
        });
        console.log("Updating user contact", user);
        return resp.json(newContact);
      } else {
        return resp.json({
          error: "user not found"
        });
      }
    } else {
      return resp.json({
        error: "illegal entry"
      });
    }
  },
  async update(req, resp) {
    let contact = await Contact.findByIdAndUpdate(req.query.id, req.query);
    contact = await Contact.findById(req.query.id);
    return resp.json(contact)
  }

}