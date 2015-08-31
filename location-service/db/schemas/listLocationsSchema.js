var db = require('../db');
var Promise = require('bluebird');

var createWishlistLocationTable = Promise.coroutine(function*() {
  var exists = yield db.schema.hasTable('locations');
  if (!exists) {
    yield db.schema.createTable('list-location', function(table) {
      table.increments();
      table.integer('list').unsigned().references('id').inTable('lists');
      table.integer('location').unsigned().references('id').inTable('locations'); 
      table.timestamps();
    });
  }
});

module.exports = createWishlistLocationTable;