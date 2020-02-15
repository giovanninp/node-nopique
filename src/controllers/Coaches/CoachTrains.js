const Coach = require('../../models/Coach');
const Train = require('../../models/Train');
const stringToArray = require('../../utils/stringToArray');

module.exports = {
  async index(req, resp) {
    const {
      coach_id
    } = req.query;

    let result = [];

    if (coach_id) {
      result = await Train.find({
        coaches_ids: {
          $in: coach_id
        }
      });
    }
    return resp.json(result);
  },
  async store(req, resp) {
    const {
      coach_id,
      train_id
    } = req.body;

    result = {
      coach: {},
      train: {}
    };

    if (coach_id && train_id) {
      result.coach = await Coach.findById(coach_id);
      result.train = await Train.findById(train_id);
      if (result.coach && result.train) {
        result.coach.trains_ids.push(train_id);
        result.train.coaches_ids.push(coach_id);
        result.coach = await Coach.findByIdAndUpdate(coach_id, {
          trains_ids: result.coach.trains_ids
        });
        result.train = await Train.findByIdAndUpdate(train_id, {
          coaches_ids: result.train.coaches_ids
        })
      }
    }
    return resp.json(result);
  },
  async delete(req, resp) {
    const {
      coach_id,
      train_id
    } = req.query;


    let result = {
      coach: {},
      train: {}
    }

    if (coach_id && train_id) {
      result.coach = await Coach.findById(coach_id);
      result.train = await Train.findById(train_id);

      if (result.train.coaches_ids.length === 1) {
        result.train = await Train.findByIdAndRemove(train_id);
      } else {
        let coachesArray = result.train.coaches_ids.splice((result.train.coaches_ids.indexOf(coach_id - 1)), 1);
        let trainsArray = result.coach.trains_ids.splice((result.coach.trains_ids.indexOf(train_id) - 1), 1);

        result.coach = await Coach.findByIdAndUpdate(coach_id, {
          trains_ids: trainsArray
        });
        result.train = await Train.findByIdAndUpdate(train_id, {
          coaches_ids: coachesArray
        });
      }
    }
    return resp.json(result);
  }
}