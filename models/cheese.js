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

cheese.find = function(req, res, next){
  connection.oneOrNone("SELECT * FROM cheeses WHERE id=$1;", [req.params.id])
    .then(function(result){
      res.locals.cheese = result;
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

cheese.create = function(req, res, next){
  connection.one("INSERT INTO cheeses(name, color, origin, stink_level) VALUES($1,$2,$3,$4) RETURNING id;",
  [req.body.name, req.body.color, req.body.origin, req.body.stink_level])
    .then(function(result){
      res.locals.cheese_id = result.id;
      next()
    }).catch(function(error){
      console.log(error);
      next();
    })
}

module.exports = cheese;