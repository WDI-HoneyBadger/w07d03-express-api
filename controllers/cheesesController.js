const express = require('express');
const router = express.Router();

const cheese = require('../models/cheese');

const sendCheeses = (req, res) => res.json(res.locals.cheeses);
const sendCheese = (req, res ) => res.json(res.locals.cheese);
const sendSuccess = (req, res) => res.json({message: "success"});

router.get('/', cheese.getAll, sendCheeses);
router.get('/:id', cheese.find, sendCheese);

router.post('/', cheese.create, sendCheese);
router.put('/:id', cheese.update, sendCheese)
router.delete('/:id', cheese.delete, sendSuccess);

module.exports = router;