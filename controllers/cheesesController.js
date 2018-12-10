var express = require('express');
var router = express.Router();

var cheese = require('../models/cheese');

router.get('/', cheese.getAll, function(req, res){
  mustacheVariables = {
    cheeses: res.locals.cheeses
  }

  res.render('./cheeses/index', mustacheVariables);
})

module.exports = router;