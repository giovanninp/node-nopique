const express = require('express');
const server = require('./utils/server');
const routes = require('./routes');
const cors = require('cors');

// server;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);