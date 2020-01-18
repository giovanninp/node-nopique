const Train = require('../../models/Train');
const Athlete = require('../../models/Athlete');
const Coach = require('../../models/Coach');

module.exports = {
    async index (req, resp) {
        const trains = await Train.find();
        return resp.json(trains)
    },
    async store (req, resp) {
        const {
            title,
            coach_id,
            athlete_id,
            interpolation_time,
            notes = ""
        } = req.body;
        
        
        const found = await Train.findOne({title,athlete_id});
        

        const foundAthlete = await Athlete.findById(athlete_id);
        const foundCoach = await Coach.findById(coach_id);
        
        // if (!foundAthlete) console.log("Not found");

        if (!found && foundAthlete) {
            const train = await Train.create({
                title,
                coach_id,
                athlete_id,
                interpolation_time,
                notes
            });

            return resp.json(train);
        }

        else if(!foundAthlete) {
            return resp.json({message:'Athlete not found'})
        }
        else if(!foundCoach) {
            return resp.json({message:'Coach not found'})
        }
        else {
            return resp.json({message:'Already exists'});
        }
    }
}