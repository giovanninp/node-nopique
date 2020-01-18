const Exercise = require('../../models/Exercise');
const thereIsAtDB = require('../../utils/thereIsAtDB');

module.exports = {
    async index (req, resp) {
        const exercises = await Exercise.find();
        return resp.json(exercises);
    },
    async store (req,resp) {
        const {
            name,
            muscular_group,
            img_url = '',
            gif_url = '',
            video_url = ''
        } = req.body;

        const found = await Exercise.findOne({name})
        
        if (!found) {
            const exercise = await Exercise.create({
                name,
                muscular_group,
                img_url,
                gif_url,
                video_url
            });
    
            return resp.json(exercise);
        }

        else {
            return resp.json({message:'Already exists'});
        }
    },
    async update (req, resp) {
        const exercise = await Exercise.findByIdAndUpdate(req.query.id,req.query);
        return resp.json(exercise);
    }
}