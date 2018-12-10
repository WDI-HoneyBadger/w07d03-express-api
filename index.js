//top-level config
var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var bodyParser = require('body-parser');

//app-level config
var app = express();
var cheesesController = require('./controllers/cheesesController');

app.engine('html', mustache());
app.set('view engine', 'html');

/* setting up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app-level routing
app.set('views', __dirname + '/views');

//start app
app.listen(port, function(){
    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');
});

//route controllers
app.use('/cheeses', cheesesController);

app.use('/', function(req, res){
  res.send('homepage!');
});
