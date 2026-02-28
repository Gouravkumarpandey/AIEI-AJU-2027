const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  affiliation: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);
