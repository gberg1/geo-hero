var db = require('../db');
var Promise = require('bluebird');

var createUsersTable = Promise.coroutine(function*() {
  var exists = yield db.schema.hasTable('locations');
  if (!exists) {
    yield db.schema.createTable('users', function(table) {
      table.increments();
      table.string('name');
      table.unique().string('email');
      table.unique().string('username');
      table.timestamps();
    });
  }
});

module.exports = createUsersTable;