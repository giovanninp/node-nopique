const Athlete = require('../models/Athlete');
const locationPoint = require('../utils/locationPoint');
// const thereIsAtDB = require('../utils/thereIsAtDB');


module.exports = {
    async index (req,resp) {
        const athletes = await Athlete.find();
        return resp.json(athletes);
    },
    
    async store (req,resp) {
        const { 
            name,
            nickname, 
            bio = "", 
            phone_number = null,
            birthdate = null,
            training = false,
            looking_for_a_coach = false,
            avatar_url = "",
            latitude,
            longitude
        } = req.body;

        const location = locationPoint(latitude,longitude);

        const found = await Athlete.findOne({nickname})
        
        if(!found){
            const athlete = await Athlete.create({
                name,
                nickname,
                bio,
                phone_number,
                birthdate,
                training,
                looking_for_a_coach,
                avatar_url,
                location
            });
    
            return resp.json(athlete);
        }
        else {
            return resp.json({message:'Already exists'});
        }

    }
}