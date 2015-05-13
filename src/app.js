var http = require('http');
var path = require('path');
var Api = require('./lib/api');
var Cards = require('./lib/cards');
var express = require('express');
var logger = require('morgan');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jade');

app.use('/api', Api);

app.get('/', (req, res) => res.render('index'));
app.get('/print', (req, res) => res.render('print', {
  whiteCards: Cards.answers,
  blackCards: Cards.questions
}));


// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ERROR HANDLERS
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(app.get('env'));
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var server = app.listen(process.env.PORT || 3000, () => {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Caracas Against Humanity listening at http://%s:%s', host, port);

});
