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
app.use('/asana_create_task_new', addIntakeRouter);
app.use('/users', usersRouter);
app.use('/calculate_score', calculateRouter);


var crypto = require("crypto");

// calculate webhook
app.post('/calculate_score', function (req, res) {

  ASANA_CALCULATE_OPP.calculateOppScoring();
  rconsole.log('req: ', req);
  console.log("req.headers['x-hook-secret']: " + req.headers['x-hook-secret']);

  const cal_response = {
    statusCode: 200,
    headers: {
      "X-Hook-Secret": req.headers['X-Hook-Secret']
    },
    body: JSON.stringify('Hello from Lambda!'),
  };
  return cal_response;
});

// calculate webhook

// would just be the id of the webhook and then my script execution 
// /
app.post('/create_webhook_calculate', function (req, res) {

  console.log("req.headers['x-hook-secret']: " + req.headers['x-hook-secret']);
  var webhookSecret = req.headers['x-hook-secret'];
  
  // when the webhook is being created 
    if (webhookSecret){ 
      ASANA_WEBHOOK_CALCULATE_RESULT.webhookCalculateResult();
      res.status(200);
      res.setHeader('X-Hook-Secret', req.headers['x-hook-secret']);
      res.send();

    }
  // when the webhook is being executed  
  const signature = req.headers['X-Hook-Signature'];
  const hash = crypto.createHmac('sha256', 'X-Hook-Secret}') // the signature is encryced , you will need to decrpyt this
  .update(String(req.body))
  .digest('hex');
  
  // if the signature is not valid 
  if (signature != hash){ 
      res.status(401); // send a error 
      res.send();
    }else {
      // ASANA_WEBHOOK_CALCULATE_RESULT.webhookCalculateResult();
      console.log("Asana script is successfully executed")
      res.status(200); // send a success // this 
      res.send();
    }
 
});


// calculate webhook
app.post('/asana_create_task_new', function (req, res) {

    console.log("req.headers['x-hook-secret']: " + req.headers['x-hook-secret']);
    var webhookSecret = req.headers['x-hook-secret'];
   
    // when the webhook is being created 
      if (webhookSecret){ 
      res.status(200);
      res.setHeader('X-Hook-Secret', req.headers['x-hook-secret']);
      res.send();
      }

    // when the webhook is being executed  
    const signature = req.headers['X-Hook-Signature'];
    const hash = crypto.createHmac('sha256', 'X-Hook-Secret}') // the signature is encryced , you will need to decrpyt this
    .update(String(req.body))
    .digest('hex');
    
    // if the signature is not valid 
    if (signature != hash){ 
        res.status(401); // send a error 
        res.send();
      }else {
        ASANA_ADD_NEW_TASK.createNewAsanaTask();
        console.log("Asana script is successfully executed")
        res.status(200); // send a success // this 
        res.send();
      }
     
});

app.post('/task_create_new_webhook', function (req, res) {
  ASANA_WEBHOOK_ADD_NEW_TASK.webHookAddNewTask();

  res.status(200).send('Create new task in Asana created successfully text');

  // res.send('Create new task in Asana created successfully');

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