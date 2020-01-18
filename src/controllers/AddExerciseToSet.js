const TrainSet = require('../models/TrainSet');
const Exercise = require('../models/Exercise');
const textToArray = require('../utils/textToArray');

module.exports = {
    async update (req, resp) {
        const { 
            exercise_ids,
            set_id
        } = req.query;

        const exercisesArray = textToArray(exercise_ids);
        const foundSet = await TrainSet.findByIdAndUpdate(set_id,{exercises_ids: exercisesArray});

        return resp.json(foundSet);
        
    }
}