var express = require('express');
var app = express();
var port = process.env.PORT || 3009;
var path = require('path');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// files
var main = require('./app/main.js');

// routes
app.use('/', main);

app.listen(port, () => {
	console.log('Server is running on port: ' + port);
});

module.exports = app;