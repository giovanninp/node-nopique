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
        
        for(i = 0; i < trainArray.length; i++) {
            await Train.findByIdAndUpdate(trainArray[i],{athlete_id, coach_id});
        }
        let foundAthlete = await Athlete.findById(athlete_id);
        let foundCoach = await Coach.findById(coach_id);
        
        foundAthlete.trains_ids += (trainArray);
        foundCoach.trains_ids += (trainArray);

        console.log("trains",foundAthlete);

        await Athlete.findByIdAndUpdate(athlete_id,{trains_ids:foundAthlete.trains_ids})
        await Coach.findByIdAndUpdate(coach_id,{trains_ids:foundCoach.trains_ids});

        return resp.json({message:"completed"});
    }
}