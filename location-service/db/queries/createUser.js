var db = require('../db');
var Promise = require('bluebird');

// returns a promise
module.exports = function(user) {
  return db('users').insert(user); 
}