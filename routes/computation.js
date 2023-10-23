var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var rnd = Math.random().toFixed(2);
  var coshF = Math.log1p(rnd).toFixed(2);
 
  res.render('computation', {
    coshF: `log1p Value is  ${coshF}`
  }

  );


});

module.exports = router;
