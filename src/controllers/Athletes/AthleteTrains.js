const Athlete = require('../../models/Athlete');
const Train = require('../../models/Train');

module.exports = {
  async index(req, res) {
    const {
      athlete_id,
      train_id
    } = req.query;

    let result = {
      athlete: {},
      trains: []
    };

    if (athlete_id || train_id) {
      if (athlete_id && train_id) {
        result.athlete = await Athlete.findById(athlete_id);
        result.trains = await Athlete.findById(train_id);
      } else if (athlete_id) {
        result.athlete = await Athlete.findById(athlete_id);
        result.trains = await Train.find({
          athletes_ids: {
            $in: athlete_id
          }
        });
      }
    }
    return res.json(result);
  },
  async store(req, resp) {
    const {
      athlete_id,
      train_id,
    } = req.body;
    let result = {
      athlete: {},
      train: {}
    }

    if (athlete_id || train_id) {
      if (athlete_id && train_id) {
        result.athlete = await Athlete.findById(athlete_id);
        result.train = await Train.findById(train_id);
        if (result.athlete && result.train) {
          let hasThatTrain = result.athlete.trains_ids.map(train => (
            train === train_id ? true : false
          ));
          let hasThaAthlete = result.train.athletes_ids.map(athlete => (
            athlete === athlete_id ? true : false
          ));
          console.log(hasThaAthlete,hasThatTrain);
          if (!hasThatTrain && !hasThaAthlete) {
            result.athlete.trains_ids.push(train_id);
            result.trains.athletes_ids.push(athlete_id);
            result.athlete = await Athlete.findByIdAndUpdate(athlete_id, {
              trains_ids: result.athlete.trains_ids
            });
            result.train = await Train.findByIdAndUpdate(train_id, {
              athletes_ids: result.train.athletes_ids
            });
          }
        }
      }
    }
    return resp.json(result);
  },
  async delete(req, resp) {
    
  }
}