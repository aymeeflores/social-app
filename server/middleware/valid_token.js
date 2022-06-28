const db = require('../database');

module.exports = (req, res, next) => {
	try{
		const token = req.headers.authorization.split(' ')[1];
		let sql = "SELECT * FROM users WHERE token = ?";
		db.get(sql, [token], (err, row) => {
			if (err) {
				res.status(500).send(err.message)
				return;
			}
			req.user = row;
			next();
		});

	}catch {
		res.status(401).json({
			error: "Invalid User"
		});
	}

}