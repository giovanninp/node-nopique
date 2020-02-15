const mongoose = require('mongoose');

const server = mongoose.connect('mongodb+srv://nopique:school@cluster0-epldx.mongodb.net/nopique-app',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = server;
