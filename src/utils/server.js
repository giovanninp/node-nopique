const mongoose = require('mongoose');

const server = mongoose.connect('mongodb+srv://giovanninp:roberta123@cluster0-epldx.mongodb.net/nopique-app',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = server;