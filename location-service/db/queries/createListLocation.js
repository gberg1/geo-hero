var db = require('../db');
var Promise = require('bluebird');

// returns a promise
module.exports = function(item) {
  return db('list-location').insert(item); 
}