const Exercise = require('../../models/Exercise');
const stringToArray = require('../../utils/stringToArray');

module.exports = {
  async index(req, resp) {
    let {
      title,
      muscular_groups = ""
    } = req.query;
    let result;

    muscular_groups = muscular_groups.trim();

    if (title || muscular_groups.length >= 1) {
      if (!muscular_groups) {
        result = await Exercise.find({
          title
        });
      } else {
        const muscularsArray = stringToArray(muscular_groups);
        if (title) {
          result = await Exercise.find({
            title,
            muscular_groups: muscularsArray
          });
        } else if (!title) {
          result = await Exercise.find({
            muscular_groups: {
              $all: muscularsArray
            }
          })
        }
      }
    }

    console.log(result);

    return resp.json(result);
  }
}