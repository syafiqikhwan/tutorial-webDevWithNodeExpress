var express = require('express');
var handlebars = require('express3-handlebars').create({ defaultLayout : 'main' });

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
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
	res.type('text/plain');
	res.status(500);
	res.send('500 - Internal Error');
});

app.listen(app.get('port'), function(){
	console.log('Server Running at port ', app.get('port'));
});