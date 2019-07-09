var logger = require('./logger');
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./model'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.01:27017/tshirt', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes'); //importing route
routes(app); //register the route


// app.use(function(req, res, next) {
//   return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
// });

app.listen(port);

logger.info('RESTful API server started on: ' + port);
