const Coach = require('../models/Coach');
const locationPoint = require('../utils/locationPoint');
const textToArray = require('../utils/textToArray');

module.exports = {
    async index (req,resp) {
      const coaches = await Coach.find();
      return resp.json(coaches);  
    },
    async store (req,resp) {
        let {
            name,
            nickname,
            phone_number,
            birthdate = null,
            reg_num = null,
            avatar_url = "",
            bio = "",
            specs = "",
            latitude,
            longitude
        } = req.body;
    
        const location = locationPoint(latitude,longitude);

        specs = textToArray(specs);
    
        const found = await Coach.findOne({nickname});

        if(!found) {
            const coach = await Coach.create({
                name,
                nickname,
                phone_number,
                birthdate,
                reg_num,
                avatar_url,
                bio,
                specs,
                location,
                specs
            });
        
            return resp.json(coach);
        }

        else {
            return resp.json({message:'Already exists'});
        }
    },
    async update(req,resp) {
        // const update = req.query.splice(0,1);
        const user = await Coach.findByIdAndUpdate(req.query.id,req.query);
        return await resp.json(user);
    }
}