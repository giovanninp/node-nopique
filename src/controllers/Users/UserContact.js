const User = require('../../models/User');
const Contact = require('../../models/Contact');

module.exports = {
    async index (req, resp) {
        const {
            user_id,
            contact_id
        } = req.query;

        let result = {
            user:{},
            contact:{}
        };

        if(user_id && contact_id) {
            result.user = await User.findByIdAndUpdate(user_id,{contact_id});
            result.contact = await Contact.findByIdAndUpdate(contact_id,{user_id});
        }
        else if(user_id && !contact_id) {
            result.user = await User.findById(user_id);
            result.contact = await Contact.findById(result.user.contact_id);
        }
        else {
            result.contact = await Contact.findById(contact_id);
            result.user = await User.findById(result.contact.user_id);
        }
        return resp.json(result);
    }
}