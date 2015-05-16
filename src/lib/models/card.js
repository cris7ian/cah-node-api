var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var card = Schema({
  content: String,
  index: Number
});

exports = mongoose.model('Card', card);
