var config = require('../config');
var Promise = require('bluebird');

// Automatically handles pooling, so make one connection and then export for files to use
var knex = require('knex')({
  client: config.db.client,
  connection: {
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
  }
});
module.exports = knex;

// Put this after export because its dependent on the export
// var testSchema = require('./schemas/testSchema')();


// creates tables if they don't already exist
var usersSchema = require('./schemas/usersSchema')();
var locationsSchema = require('./schemas/locationsSchema')();
var listsSchema = require('./schemas/listsSchema')();
var listLocationsSchema = require('./schemas/listLocationsSchema')();