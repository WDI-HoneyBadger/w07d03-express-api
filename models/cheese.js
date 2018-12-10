var connection = require('../db/dbconfig');

var cheese = {};

// create a method that gets all the data from the "cheeses" table
cheese.getAll = function(req, res, next) {
  connection.manyOrNone("SELECT * FROM cheeses;")  // query the database
    .then(function(result){   // return the data as a javascript object "result"
      console.log('done');
      res.locals.cheeses = result;  // save that javascript object to the response object in res.locals.cheeses
      next();  // move on to the next command
    })
}

module.exports = cheese;