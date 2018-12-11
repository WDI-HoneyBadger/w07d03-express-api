var express = require('express');
var router = express.Router();

var cheese = require('../models/cheese');

router.get('/', cheese.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id', cheese.find, renderShow);
router.post('/', cheese.create, redirectShow);
router.delete('/:id', cheese.delete, redirectIndex);

function renderIndex(req, res) {
  mustacheVariables = {
    cheeses: res.locals.cheeses
  }
  res.render('./cheeses/index', mustacheVariables);
}

function renderNew(req, res) {
  res.render('./cheeses/new');
}

function renderShow(req, res) {
  res.render('./cheeses/show', res.locals.cheese)
}

function redirectShow(req, res) {
  var id = res.locals.cheese_id;
  res.redirect(`/cheeses/${id}`);
}

function redirectIndex(req, res){
  res.redirect('/cheeses');
}

module.exports = router;