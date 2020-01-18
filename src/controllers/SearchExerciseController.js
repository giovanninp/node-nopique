const Exercise = require('../models/Exercise');

module.exports = {
    async index(req, resp) {
        const { name, muscular_group } = req.query;
        let exercises;

        console.log(req.query);

        if(name || muscular_group) {
            if(!name && muscular_group) {
                exercises = await Exercise.find({muscular_group});
            }
            else if(name && muscular_group) {
                exercises = await Exercise.find({
                    name,
                    muscular_group
                });
            }
            else if(name && !muscular_group) {
                exercises = await Exercise.find({
                    name
                });
            }
        }
        return resp.json(exercises);
    }
}