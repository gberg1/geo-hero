var createList = require('../db/queries/createList');
var db = require('../db/db');
var Promise = require('bluebird');
var should = require('should');

describe('createList()', function() {
  // TODO: figure out how to reference owner of list
  var testList = {name: 'San Francisco', description: 'My favorite city', owner: 1};

  after(function(done) {
    db('lists').delete().where({name: testList.name}).then(function() {
      done();
    });
  });

  it ('should insert a list into the database', function(done) {
    var testCreateList = Promise.coroutine(function*(list) {
      yield createList(list);
      var queryResponse = yield db('lists').select('*').where({name: 'San Francisco'});
      queryResponse[0].name.should.equal(testList.name);
      queryResponse[0].description.should.equal(testList.description);
      // TODO: figure out owner of list
      queryResponse[0].owner.should.equal(testList.owner);
      done();
    })
    testCreateList(testList);
  });
});