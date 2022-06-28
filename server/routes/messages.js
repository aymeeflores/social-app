const api = require('express').Router();
const db = require('../database');

// get my messages
api.get('/', (req, res) => {
	let sql = "SELECT m.*, u.name, u.email FROM messages m LEFT JOIN users u ON u.`id` = m.`from` WHERE m.`to` = ?";
	db.all(sql, [req.user.id], (err, row) => {
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		let messages = [];

		row.forEach( (row) => {
			messages.push({
				id: row.id,
				message: row.message,
				sent: row.sent,
				from: {
					id: row.from,
					name: row.name,
					email: row.email,
				}
			});
		});


		res.json(messages);
	});
});

// send a message
api.post('/:id', (req, res) => {

	let to = req.params.id;
	let message = req.body.message;
	let date = new Date().toISOString();
	let sql = "INSERT INTO messages (from, to, message, sent) VALUES (?,?,?,?)";
	let data = [
		req.user.id,
		to,
		message,
		date
	];

	db.all(sql, data, function(err, row){
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		if( this.lastID ) {
			sql = "SELECT * FROM messages WHERE id = ?";
			db.get(sql, [this.lastID], function(err, row){
				if(err){
					res.status(500).send(err.message);
					return;
				}

				res.json(row);
			});
		}else{
			res.status(500).json({'error': 'Database error'});
		}
	});
});

module.exports = api;