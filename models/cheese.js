const connection = require('../db/dbconfig');

const cheese = {};

// create a method that gets all the data from the "cheeses" table
cheese.getAll = (req, res, next) => {
  connection.manyOrNone("SELECT * FROM cheeses;")  // query the database
    .then(result => {   // return the data as a javascript object "result"
      console.log('done');
      res.locals.cheeses = result;  // save that javascript object to the response object in res.locals.cheeses
      next();  // move on to the next command
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

cheese.find = function(req, res, next){
  connection.oneOrNone("SELECT * FROM cheeses WHERE id=$1;", [req.params.id])
    .then(result => {
      res.locals.cheese = result;
      next();
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

cheese.create = function(req, res, next){
  console.log(req.body)
  connection.one("INSERT INTO cheeses(name, color, origin, stink_level) VALUES($1,$2,$3,$4) RETURNING *;",
  [req.body.name, req.body.color, req.body.origin, req.body.stink_level])
    .then(result => {
      res.locals.cheese = result;
      next()
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

cheese.update = function(req, res, next){
  connection.one("UPDATE cheeses SET name = $1, color = $2, origin = $3, stink_level = $4 WHERE id = $5 RETURNING *;",
  [req.body.name, req.body.color, req.body.origin, req.body.stink_level, req.params.id])
    .then(result => {
      res.locals.cheese = result;
      next()
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

cheese.delete = function(req, res, next){
  connection.none('DELETE FROM cheeses WHERE id=$1;', [req.params.id])
    .then(()=>{
      console.log('successful delete');
      next();
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

module.exports = cheese;