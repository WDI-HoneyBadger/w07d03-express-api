const express = require('express');
const router = express.Router();

const cheese = require('../models/cheese');

const renderIndex = (req, res) => res.render('./cheeses/index', { cheeses: res.locals.cheeses });
const renderNew = (req, res) => res.render('./cheeses/new');
const renderEdit = (req, res) => res.render('./cheeses/edit', res.locals.cheese);
const renderShow = (req, res) => res.render('./cheeses/show', res.locals.cheese);
const redirectShow = (req, res) => res.redirect(`/cheeses/${res.locals.cheese.id}`);
const redirectIndex = (req, res) => res.redirect('/cheeses');

router.get('/', cheese.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id', cheese.find, renderShow);
router.get('/:id/edit', cheese.find, renderEdit);

router.post('/', cheese.create, redirectShow);
router.put('/:id', cheese.update, redirectShow)
router.delete('/:id', cheese.delete, redirectIndex);

module.exports = router;