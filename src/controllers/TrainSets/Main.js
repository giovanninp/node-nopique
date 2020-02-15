const TrainSet = require('../../models/TrainSet');
const Train = require('../../models/Train');
const stringToArray = require('../../utils/stringToArray');

module.exports = {
  async index(req, resp) {
    const trainsSets = await TrainSet.find();
    return resp.json(trainsSets);
  },
  async store(req, resp) {
    let {
      train_id,
      exercises_ids = "",
      rest_time = 0,
      reps = "",
      cadency = []
    } = req.body;

    let trainFound = await Train.findById(train_id);

    console.log(trainFound);

    exercisesArray = stringToArray(exercises_ids.trim());

    console.log(exercisesArray);

    if (trainFound) {
      const newTrainSet = await TrainSet.create({
        train_id,
        exercises_ids:exercisesArray ? exercisesArray : [],
        rest_time,
        reps,
        done: false,
        cadency
      });

      // const addTrainTo 
      console.log(newTrainSet._id);

      trainFound.trains_sets_ids.push(newTrainSet._id);

      console.log(trainFound);

      const trainResult = await Train.findByIdAndUpdate(
        train_id, {
          trains_sets_ids: trainFound.trains_sets_ids
        }
      );

      return resp.json(newTrainSet);
    }
    return resp.json({
      error: "train unavailable"
    });
  },
  async update (req, resp) {
    let result = {};
    console.log(req.query);
    if(req.query.exercises_ids) {
      const exercisesArray = stringToArray(req.query.exercises_ids);
      result = await TrainSet.findByIdAndUpdate(req.query.id,{
        exercises_ids:exercisesArray
      });
      result = await TrainSet.findById(req.query.id);
    }
    else {
      result = await TrainSet.findById(req.query.id,req.query);
      result = await TrainSet.findById(req.query.id);
    }
    return resp.json(result);
   }
}