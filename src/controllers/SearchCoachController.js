const Coach = require('../models/Coach');
const textToArray = require('../utils/textToArray');

module.exports = {
    async index (req,resp) {
        // const coaches = await Coach.findOne
        const { latitude, longitude, specs, name } = req.query;
        
        const specsArray = textToArray(specs);

        let coaches;

        if (!(longitude || latitude)) {
            coaches = await Coach.find({
                specs: {
                    $in: specsArray,
                },
            })
        }

        else {
            coaches = await Coach.find({
                specs: {
                    $in: specsArray,
                },
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude,latitude],
                        },
                        $maxDistance: 10000,
                    }
                }
                
            })
        }


        console.log(req.query);
        return resp.json(coaches);
    }
}