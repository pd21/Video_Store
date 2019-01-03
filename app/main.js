var express = require("express");
var app = express();

app.get('/', (req,res) => {
	console.log("lol");
	return res.render('main.ejs')
});

module.exports = app;