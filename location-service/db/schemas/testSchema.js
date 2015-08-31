var db = require('../db');
var Promise = require('bluebird');

var createTestGeoTable = Promise.coroutine(function*() {
  // yield db.schema.dropTableIfExists('geotest');
  // table = yield db.schema.createTable('geotest', function(table) {
  //   table.increments();
  //   table.string('name');
  //   table.timestamps();
  // });
  // response = yield db.raw('ALTER TABLE geotest ADD COLUMN geo GEOMETRY');
  console.log('Table created!');
});

module.exports = createTestGeoTable;