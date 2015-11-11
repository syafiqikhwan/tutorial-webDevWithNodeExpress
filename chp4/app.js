var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout : 'main'});

var app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
});

app.get('/about', function(req, res){
	res.render('about');
});

app.use(function(req, res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Server Running at Port', app.get('port'));
});