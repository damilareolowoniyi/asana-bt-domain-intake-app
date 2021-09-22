var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//get methods
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var calculateRouter = require('./routes/calculate');
var addIntakeRouter = require('./routes/addIntake');

//POST Methods 
const ASANA_CALCULATE_OPP = require('./client/AsanaOpportunityCalculator.js');
const ASANA_WEBHOOK_CALCULATE_RESULT = require('./client/AsanaWebHookCalculateResult.js');

const ASANA_ADD_NEW_TASK = require('./client/InTakeRequestCreator.js');
const ASANA_WEBHOOK_ADD_NEW_TASK = require('./client/AsanaWebHookAddTask.js');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/asana_create_new_task', addIntakeRouter);
app.use('/users', usersRouter);
app.use('/calculate_score', calculateRouter);


//var asana = require('asana');

// before deploying change this 
// var personalAccessToken =  process.env.ASANA_ACCESS_TOKEN;

//local
// env variable 

// Construct an Asana client
//var client = asana.Client.create().useAccessToken(personalAccessToken);


// calculate webhook
app.post('/create_webhook_calculate', function (req, res) {
  ASANA_WEBHOOK_CALCULATE_RESULT.webhookCalculateResult();
  res.send('Calculate new opprunintiy successfully ran');
    // pass in http..../create_webhook_calculate into the target 
});


// calculate webhook
app.post('/calculate_score', function (req, res) {
  // your are sending the X-hook-serect and sending back a response that you have acknowlegded the webhok.
  // send an X-hook secret get the webhook 
  ASANA_CALCULATE_OPP.calculateOppScoring();
  res.status(200).send(res.header('X-Hook-Secret', req.headers['x-hook-secret']));

 });

// calculate webhook
app.post('/create_webhook_task', function (req, res) {
  ASANA_WEBHOOK_ADD_NEW_TASK.webHookAddNewTask();
  res.send('Calculate new task successfully created successfully ran');
  });


app.post('/asana_create_new_task', function (req, res) {
  ASANA_ADD_NEW_TASK.createNewAsanaTask();
  // your are sending the X-hook-serect and sending back a response that you have acknowlegded the webhok.
  // send an X-hook secret get the webhook 
  //res.sendStatus(200);
  res.sendStatus(200).send(res.header('X-Hook-Secret', req.headers['x-hook-secret']));
});



 


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;