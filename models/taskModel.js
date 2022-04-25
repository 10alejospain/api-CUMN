const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  creationDate: {
    type: Date,
  },
});

module.exports = mongoose.model('Task', taskSchema);
