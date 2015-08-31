var db = require('../db');
var Promise = require('bluebird');

var createListsTable = Promise.coroutine(function*() {
  var exists = yield db.schema.hasTable('lists');
  if (!exists) {
    yield db.schema.createTable('lists', function(table) {
      table.increments();
      table.string('name');
      table.integer('owner').unsigned().references('id').inTable('users');
      table.text('description')
      table.timestamps();
    });
  }
});

module.exports = createListsTable