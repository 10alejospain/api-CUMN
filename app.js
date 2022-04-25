const express = require('express');

const taskRoute = require('./routes/taskRoute');

const app = express();

app.use(express.urlencoded({
  extended: false,
}));

app.use(express.json());



app.use('/task', taskRoute);

module.exports = app;
