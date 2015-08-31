var express = require('express');
var config = require('./config');
var db = require('./db/db');
var app = express();

var port = config.port;

app.listen(port, function() {
  console.log('Server is listening on:' + port);
});