const Athlete = require('../models/Athlete');
const Coach = require('../models/Coach');
const Exercise = require('../models/Exercise');

const tables = {
    Athlete,
    Coach,
    Exercise
}

module.exports = async function thereIsAtDB (role,identifier) {
    return await tables[role].findOne({identifier}); 
}