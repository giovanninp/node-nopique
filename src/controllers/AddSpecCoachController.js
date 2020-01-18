const Coach = require('../models/Coach');
const textToArray = require('../utils/textToArray');

module.exports = {
    async update (req,resp) {
        const {id, specs} = req.query;
        let actualUser = await Coach.findById(id);
        let specsArray = textToArray(specs);

        for(i = 0;i < specsArray.length; i++) {
            actualUser.specs.push(specsArray[i]);
        } // falta validação de repetidos

        actualUser = await Coach.findOneAndUpdate(id,{specs:actualUser.specs});

        return resp.json(actualUser);
        
    }
}