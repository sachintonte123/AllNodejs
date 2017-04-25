var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre.js');
Book = require('./models/book.js');
mongoose.connect('mongodb://localhost/bookstore');

var db = mongoose.connection;

//Root
app.get('/', function(req, res){
	res.send('use /api/books or /api/genres');
});

//Fetch Genre
app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
			if(err){
				throw err;
			}
			res.json(genres);
	});
});


//Add Genre
app.post('/api/genres', function(req, res){
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre){
			if(err){
				throw err;
			}
			res.json(genre);
	});
});

//Update Genre
app.put('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){
			if(err){
				throw err;
			}
			res.json(genre);
	});
});

//delete Genre
app.delete('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	Genre.removeGenre(id, function(err, genre){
			if(err){
				throw err;
			}
			res.json(genre);
	});
});

//Fetch Books
app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
			if(err){
				throw err;
			}
			res.json(books);
	});
});

//fetch Books By id
app.get('/api/books/:_id', function(req, res){
	Book.getBooksById(req.params._id, function(err, book){
			if(err){
				throw err;
			}
			res.json(book);
	});
});

//Add Book
app.post('/api/books', function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book){
			if(err){
				throw err;
			}
			res.json(book);
	});
});

//Update books
app.put('/api/books/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, book){
			if(err){
				throw err;
			}
			res.json(book);
	});
});

//delete Book
app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.removeBook(id, function(err, book){
			if(err){
				throw err;
			}
			res.json(book);
	});
});

//Server
app.listen(3005);
console.log('starting server on port 3000');