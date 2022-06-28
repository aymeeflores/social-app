const api = require('express').Router();
const db = require('../database');

api.get('/', (req, res) => {
	res.status(400).send("Bad Request");
});

///////////////////////////////////////////////////
// MEMBERS
///////////////////////////////////////////////////

// get members
api.get('/users', (req, res) => {
	let sql = "SELECT * FROM users WHERE location_id = ?";
	db.all(sql, [req.user.location_id], (err, row) => {
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		let users = [];
		row.forEach( (item) => {
			delete item.token;
			delete item.code;
			users.push(item);
		});

		res.json(users);
	});
});

///////////////////////////////////////////////////
// FEED
///////////////////////////////////////////////////

// get feed posts
api.get('/feed', (req, res) => {
	let sql = "SELECT * FROM feeds WHERE location_id = ?";
	db.all(sql, [req.user.location_id], (err, row) => {
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		res.send(row);
	});
});

// create a post
api.post('/feed', (req, res) => {

	let image = req.body.image;
	let content = req.content;
	let date = new Date().toISOString();

	let sql = `INSERT INTO feeds (location_id, user_id, image, content, created_at) VALUES (?,?,?,?, ?)`;
	let data = [
		req.user.location_id,
		req.user.id,
		req.body.image,
		req.body.content,
		date
	];

	db.run(sql, data, function(err){
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		if( this.lastID ) {
			sql = "SELECT * FROM feeds WHERE id = ?";
			db.get(sql, [this.lastID], function(err, row){
				if(err){
					res.status(500).send(err.message);
					return;
				}

				res.json(row);
			});
		}else{
			console.log( this, this.lastID, this.data );
			res.status(500).json({'error': 'Database error'});
		}
	});
});

// update post
api.put('/feed/:postid', (req, res) => {

	let postid = req.params.postid;
	let image = req.body.image;
	let content = req.body.content;
	let sql = "UPDATE feeds SET image = ?, content = ? WHERE id = ? AND location_id = ? AND user_id = ?";
	let data = [
		image,
		content,
		postid,
		req.user.location_id,
		req.user.id,
	];

	db.run(sql, data, function(err){
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		if( this.changes > 0){
			sql = "SELECT * FROM feeds WHERE id = ?";
			db.get(sql, [postid], function(err, row){
				if(err){
					res.status(500).send(err.message);
					return;
				}

				row.status = 'updated successfuly';
				res.json(row);
			});
		}else{
			res.status(403).json({'error': 'Unauthorized'});
		}
	});
});

// delete post
api.delete('/feed/:postid', (req, res) => {

	let sql = "DELETE FROM feeds WHERE id = ? AND user_id = ?";
	let data = [
		req.params.postid,
		req.user.id
	];
	db.run(sql, data, function(err){
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		if( this.changes > 0){
			res.json({'status': true});
			return
		}

		res.status(403).json({'error': 'Unauthorized'})
		return;
	});
});



///////////////////////////////////////////////////
// EVENTS
///////////////////////////////////////////////////

// get events
api.get('/events', (req, res) => {
	let sql = "SELECT * FROM events WHERE location_id = ?";
	db.all(sql, [req.user.location_id], (err, row) => {
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		res.json(row);
	});
});

// create a event
api.post('/events', (req, res) => {

	let name = req.body.name;
	let content = req.body.content;
	let eventDate = req.body.date;
	let date = new Date().toISOString();

	let sql = `INSERT INTO events (location_id, name, content, date, created_at) VALUES (?,?,?,?,?)`;
	let data = [
		req.user.location_id,
		name,
		content,
		eventDate,
		date
	];

	db.run(sql, data, function(err){
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		if( this.lastID ) {
			sql = "SELECT * FROM events WHERE id = ?";
			db.get(sql, [this.lastID], function(err, row){
				if(err){
					res.status(500).send(err.message);
					return;
				}

				res.json(row);
			});
		}else{
			console.log( this, this.lastID, this.data );
			res.status(500).json({'error': 'Database error'});
		}
	});
});

// update event
api.put('/events/:postid', (req, res) => {

	let postid = req.params.postid;
	let name = req.body.name;
	let content = req.body.content;
	let date = req.body.date;

	let sql = "UPDATE events SET name = ?, content = ?, date = ? WHERE id = ? AND location_id = ?";
	let data = [
		name,
		content,
		date,
		postid,
		req.user.location_id
	];

	db.run(sql, data, function(err){
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		if( this.changes > 0){
			sql = "SELECT * FROM events WHERE id = ?";
			db.get(sql, [postid], function(err, row){
				if(err){
					res.status(500).send(err.message);
					return;
				}

				row.status = 'updated successfuly';
				res.json(row);
			});
		}else{
			res.status(403).json({'error': 'Unauthorized'});
		}
	});
});

// delete post
api.delete('/events/:postid', (req, res) => {

	let sql = "DELETE FROM events WHERE id = ? AND location_id = ?";
	let data = [
		req.params.postid,
		req.user.location_id
	];

	db.run(sql, data, function(err){
		if (err) {
			res.status(500).send(err.message);
			return;
		}

		if( this.changes > 0){
			res.json({'status': true});
			return
		}

		res.status(403).json({'error': 'Unauthorized'})
		return;
	});
});


module.exports = api;