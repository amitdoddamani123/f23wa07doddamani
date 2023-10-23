var express = require('express');
var router = express.Router();
var rnd;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { titles: 'Amit Math function' });

  rnd= Math.random();
var coshF=Math.acosh(rnd);
res.send('acosh('+rnd+') is='+coshF);

});

module.exports = router;
