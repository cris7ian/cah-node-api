var mongoose = require('mongoose');
var Card = require('./card');
var Schema = mongoose.Schema;

var player = Schema({
  name: String,
  password: String,
  blackCards: [Card],
  whiteCards: [Card],
  isJudge: Boolean
});

exports = mongoose.model('Player', player);
