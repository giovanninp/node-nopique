const Exercise = require('../../models/Exercise');
const stringToArray = require('../../utils/stringToArray');
const Coach = require('../../models/Coach');

module.exports = {
  async index(req, resp) {
    const exercises = await Exercise.find();
    return resp.json(exercises);
  },

  async store(req, resp) {
    let {
      title,
      author_id = "",
      muscular_groups,
      description = "",
      imgs_urls = "",
      gifs_urls = "",
      video_url = ""
    } = req.body;

    let muscularsArray = stringToArray(muscular_groups);
    let imgsArray = stringToArray(imgs_urls);
    let gifsArray = stringToArray(gifs_urls);

    author_id = author_id.trim();

    let validAuthor = await Coach.findById(author_id) ? true : false;

    if (title, muscular_groups) {
      const newExercise = await Exercise.create({
        title,
        author_id: validAuthor ? author_id : "",
        muscular_groups: muscularsArray,
        description,
        imgs_urls: imgsArray,
        gifs_urls: gifsArray,
        video_url
      });

      return resp.json(newExercise);
    }
    return resp.json({
      error: "illegal title or muscular group entry"
    })
  },

  async update(req, resp) {
    let exercise = Exercise.findByIdAndUpdate(req.query.id, req.query);
    exercise = Exercise.findById(req.query.id);
    return resp.json(exercise);
  }
}