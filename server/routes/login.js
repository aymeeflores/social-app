const api = require('express').Router();
const db = require('../database');
const crypto = require('crypto');
const uuid = require("uuid");

// const securitySalt = "$!__AymeeLeague_*%_";
const securitySalt = "";

api.post('/', (req, res) => {

	if(!req.body.email || !req.body.code){
		res.status(400).send('Bad Request');
		return;
	}

	const email = req.body.email;
	const code = crypto.createHash('md5').update(securitySalt + req.body.code).digest("hex");

	let sql = "SELECT * FROM users WHERE email = ? AND code = ?";
	db.get(sql, [email, code], (err, row) => {
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		if(row){
			let apitoken = uuid.v4();

			db.run(`UPDATE users SET token = '${apitoken}' WHERE id = '${row.id}'`, (err) => {
				if(err){
					res.status(500).send(err.message);
					return;
				}

				row.token = apitoken; // add api token
				delete row.code; // remove password
				res.send(row);
			});

		}else{
			res.status(404).send("Member not found");
		}
		return;
	});
});

module.exports = api;