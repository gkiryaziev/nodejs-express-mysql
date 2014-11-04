var mysql = require('mysql');

//connect
var connect_to_db = function (host, user, password, database) {

	//================= mysql =================
	var conn = mysql.createConnection({
		host: host,		
		user: user,
		password: password,
		database: database
	});

	conn.connect();

	return conn;
}

// отключаемся
var disconnect_from_db = function (conn) {
	conn.end();
}

// получить по номеру
var get_data_by_phone = function (conn, phone, callback) {

	conn.query("select * from maindb where phone='" + phone + "'",					
		function(err, rows, fields) {
			if(err) return callback(err);

		callback(null, rows);
	});	
}

module.exports.connect_to_db = connect_to_db;
module.exports.get_data_by_phone = get_data_by_phone;
module.exports.disconnect_from_db = disconnect_from_db;
