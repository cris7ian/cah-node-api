var express = require('express');
var router = express.Router();
var Cards = require('./cards');

//Models
var Card = require('./models/card');
var Player = require('./models/player');
var Game = require('./models/game');

const questions = Cards.questions;
const answers = Cards.answers;

const nquestions = questions.length;
const nanswers = answers.length;
const question = () => questions[Math.floor(Math.random() * nquestions)];
const answer = () => answers[Math.floor(Math.random() * nanswers)];
const pick = () => ({
  question: question(),
  answer: answer()
});

router.get('/question', (req, res) => res.json(question()));
router.get('/questions', (req, res) => res.json(questions));

router.get('/answer', (req, res) => res.json(answer()));
router.get('/answers', (req, res) => res.json(answers));


// POST game/new (with a TTL and a player)
// GET game/{id}
// POST game/{id}/player (returns your id)
// DELETE game/{id}/player (kick him out)
// POST /player/{id}/black_card (gives a card to the winner)
// PUT /game/{id}/table (put a player's card in the table)

module.exports = router;
