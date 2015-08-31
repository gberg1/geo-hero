var db = require('../db');
var Promise = require('bluebird');

// returns a promise
module.exports = function(location) {
  return db('locations').insert(location); 
}