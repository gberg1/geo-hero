var db = require('../db');
var Promise = require('bluebird');

// returns a promise
module.exports = function(list) {
  return db('lists').insert(list); 
}