var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var citiesSearchRouter = require('./routes/cities/cities.controller');
app.use('/cities', citiesSearchRouter);

module.exports = app;
