const Train = require('../../models/Train');
const stringToArray = require('../../utils/stringToArray');
const Ahtlete = require('../../models/Athlete');
const Coach = require('../../models/Coach');

module.exports = {
  async index(req, resp) {
    const trains = await Train.find();
    return resp.json(trains);
  },

  async store(req, resp) {
    let {
      title,
      type = '',
      athletes_ids = "",
      coaches_ids,
      obs = "",
      trains_sets_ids = "",
      interpolation_time = 0,
      counter = 0,
      img_url = ""
    } = req.body;

    const athletesArray = stringToArray(athletes_ids);
    const coachesArray = stringToArray(coaches_ids);
    const trainsArray = stringToArray(trains_sets_ids);

    let valid = true;

    for (let i = 0; i < athletesArray.length && valid; i++) {
      if (!(await Ahtlete.findById(athletesArray[i]))) {
        valid = false;
      }
    }

    for (i = 0; i < coachesArray.length && valid; i++) {
      if (!(await Coach.findById(coachesArray[i]))) {
        valid = false;
      }
    }

    // for(i = 0; i < trainsArray.length() && valid; i++) {
    //   if (!(await Train.findById(trainsArray[i]))) {
    //     valid = false;
    //   }
    // }

    if (valid, title) {
      const newTrainSet = await Train.create({
        title,
        type,
        athletes_ids: athletesArray,
        coaches_ids: coachesArray,
        obs,
        trainsArray,
        interpolation_time,
        counter,
        img_url
      });

      return resp.json(newTrainSet);
    }
    return resp.json({
      error: "incompleted credentials"
    });
  },

  async update(req, resp) {
    let train = await Train.findByIdAndUpdate(req.query.id, req.query);
    console.log(req.query);
    train = await Train.findById(req.query.id);
    return resp.json(train);
  }
}