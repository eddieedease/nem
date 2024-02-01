var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  var jsonresp = {
    username: 'Flavsssid'
  };

  res.json(jsonresp)
});

module.exports = router;