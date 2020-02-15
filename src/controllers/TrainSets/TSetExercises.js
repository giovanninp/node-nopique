const TrainSet = require('../../models/TrainSet');
const Exercise = require('../../models/Exercise');

module.exports = {
    async index (req, resp) {
        const {
            train_set_id
        } = req.query;

        let result = {
            train_set:{},
            exercises:[]
        };

        if(train_set_id) {
            result.train_set = await TrainSet.findById(train_set_id);
            if(result.train_set.exercises_ids) {
                let exercises = result.train_set.exercises_ids;
                console.log(exercises);
                for(let i = 0; i < exercises.length; i++) {
                    result.exercises.push(await Exercise.findById(exercises[i]));
                }
            }
        }
        return resp.json(result);
    }
}