var mysql_data = require('./mysql_data');

var PhonesHandler = function (app) {	
	app.post('/phones', function(req, res) {
		
		var phone = req.body.phone;

		var conn = mysql_data.connect_to_db('192.168.1.250', 'admin', 'admin', 'phones_nv');

		var rows = mysql_data.get_data_by_phone(conn, phone, function (err, rows) {
			if(err) res.send(err);
		res.json(rows);
		});

		mysql_data.disconnect_from_db(conn);
	});
}

module.exports = PhonesHandler;