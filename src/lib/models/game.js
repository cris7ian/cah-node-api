var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Player = require('./player');
var Card = require('./card');

var game = Schema({
  players: [Player],
  table: [Card],
  whiteBin: [Card],
  blackBin: [Card]
});

module.exports = mongoose.model('Game', game);
