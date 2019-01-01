//top-level config
const express = require('express');
const mustache = require('mustache-express');
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//app-level config
const app = express();
const cheesesController = require('./controllers/cheesesController');

app.engine('html', mustache());
app.set('view engine', 'html');

/* setting up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

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
