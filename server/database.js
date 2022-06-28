const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) { console.error('Database error', err.message); }
});

module.exports = db;