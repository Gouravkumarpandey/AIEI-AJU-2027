const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
  title: String,
  author: String,
  email: String,
  abstract: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Paper', paperSchema);
