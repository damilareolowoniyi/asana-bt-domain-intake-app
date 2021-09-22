var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */

//route for the index.html which is just slash 
router.get('/', function(req, res, next) {
  res.render('addIntake', { title: 'Asana script for new InTake Request score endpoint.' });
});
 

module.exports = router;
