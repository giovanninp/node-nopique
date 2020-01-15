const express = require('express');
const server = require('./utils/server');
const routes = require('./routes');

// server;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);