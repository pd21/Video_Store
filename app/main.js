var express = require("express");
var app = express();
var c = 0;
app.get('/', (req,res) => {
	console.log("lol");
	return res.render('video_home.ejs')
});

app.get('/insert',(req,res) => {
	console.log("gotcha");
	return res.render('main.ejs',{
		id : c + 1
	});
});
app.get('/fetch',(req,res) => {

	console.log("yo man");
	return res.render('fetch_info.ejs');
});
module.exports = app;
