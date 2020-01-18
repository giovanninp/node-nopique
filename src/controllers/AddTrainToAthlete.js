const Train = require('../models/Train');
const Athlete = require('../models/Athlete');
const Coach = require('../models/Coach');
const textToArray = require('../utils/textToArray');

module.exports = {
    async update (req, resp) {
        const { 
            athlete_id,
            coach_id,
            trains_ids
        } = req.query;
        //To finalize
        const trainArray = textToArray(trains_ids);

        const foundAthlete = await Athlete.findByIdAndUpdate(athlete_id,{trains_ids : trainArray});
        const foundAthlete = await Athlete.findByIdAndUpdate(athlete_id,{trains_ids : trainArray});

        
        if(foundCoach && foundTrain && foundAthlete) {
            
        }
    }
}