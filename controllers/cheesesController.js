var express = require('express');
var router = express.Router();

var cheese = require('../models/cheese');

router.get('/', cheese.getAll, function(req, res){
  mustacheVariables = {
    cheeses: res.locals.cheeses
  }
  res.render('./cheeses/index', mustacheVariables);
})

router.get('/new', function(req,res){
  res.render('./cheeses/new');
})

router.get('/:id', cheese.find, function(req, res){
  res.render('./cheeses/show', res.locals.cheese)
})

router.post('/', cheese.create, function(req, res){
  var id = res.locals.cheese_id;
  res.redirect(`/cheeses/${id}`);
})

module.exports = router;