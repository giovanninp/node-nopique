const Train = require('../models/Train');
const textToArray = require('../utils/textToArray');

module.exports = {
    async update (req, resp) {
        const {
            sets_ids,
            train_id
        } = req.query;

        const setsArray = textToArray(sets_ids);

        const train = await Train.findByIdAndUpdate(train_id,{sets_ids:setsArray});
        return resp.json(train);
    }
}