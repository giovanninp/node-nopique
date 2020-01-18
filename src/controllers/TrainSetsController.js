const TrainSet = require('../models/TrainSet');
const textToArray = require('../utils/textToArray');

module.exports = {
    async index (req, resp) {
        const sets = await TrainSet.find();
        return resp.json(sets);
    },
    async store (req, resp) {
        const {
            title,
            reps,
            rest_time,
            intensity,
            obs
        } = req.body;

        const set = await TrainSet.create({
            title,
            reps,
            rest_time,
            intensity,
            obs
        })
        return resp.json(set);
    },
    async update (req, resp) {
        const set = await TrainSet.findByIdAndUpdate(req.query.id, req.query);
        return resp.json(set);
    }
}