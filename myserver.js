var express		= require('express');
var bodyParser 	= require('body-parser');
/////////////
var PhonesHandler = require('./PhonesHandler');
/////////////

var app = express();

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get('*', function(req, res) {
		res.send('Hello World!');
});

////////////////////

PhonesHandler(app);

////////////////////

app.listen(8008, function(){
	console.log('Started on port 8008.');
});