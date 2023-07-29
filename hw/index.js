var express = require('express');
var app = express();

var film = require('./routes/film.js');
var category = require('./routes/category.js');

app.get('/', function (req, res) {
    res.send('Hello world!');
  });
app.use('/film', film)
app.use('/category', category)


app.listen(3000);