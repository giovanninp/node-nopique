const User = require('../../models/User');
const Athlete = require('../../models/Athlete');

module.exports = {
    async index(req, resp) {
        const {
            user_id,
            athlete_id,
        } = req.query;

        let result = {
            user: {},
            athlete: {}
        };

        let found = {
            user: user_id ? await User.findById(user_id) : null,
            athlete: athlete_id ? await Athlete.findById(athlete_id) : null
        };

        if (found.user && found.athlete) {
            result.user = await User.findByIdAndUpdate(user_id, {
                role_id: athlete_id,
                role: 'athlete',
                looking_for_a_coach: true
            });
            result.athlete = await Athlete.findByIdAndUpdate(athlete_id, {
                user_id
            });
        } else if (found.user) {
            found.athlete = await Athlete.find({
                user_id
            });
            if (found.athlete) {
                result.user = found.user;
                result.athlete = found.athlete;
            } else {
                result.athlete = await Athlete.create({
                    user_id
                });
                result.user = await User.findByIdAndUpdate(user_id, {
                    role_id: result.athlete._id,
                    role: 'athlete',
                    looking_for_a_coach: true
                });
            }

        } else if (found.athlete) {
            result.user = await User.findById(found.athlete.user_id);
            result.athlete = found.athlete;
        } else {
            result.user = await User.find();
            result.athlete = await Athlete.find();
        }

        return resp.json(result);
    }
}