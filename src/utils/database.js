const mongoose = require('mongoose');

const database = mongoose.connect('mongodb+srv://nopique:nopique1@cluster0-vg535.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.export = database;