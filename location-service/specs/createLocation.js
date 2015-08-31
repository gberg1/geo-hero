var createLocation = require('../db/queries/createLocation');
var db = require('../db/db');
var Promise = require('bluebird');
var should = require('should');

describe('createLocation()', function() {
  var testLocation = {name: "MakerSquare", address: "611 Mission Street", city:"San Francisco", state: 'CA', description: 'Coding school for software engineers'};

  after(function(done) {
    db('locations').delete().where({name: testLocation.name}).then(function() {
      done();
    });
  });

  it ('should insert a user into the database', function(done) {
    var testCreateUser = Promise.coroutine(function*(location) {
      yield createLocation(location);
      var queryResponse = yield db('locations').select('*').where({name: 'MakerSquare'});
      queryResponse[0].name.should.equal(testLocation.name);
      queryResponse[0].address.should.equal(testLocation.address);
      queryResponse[0].city.should.equal(testLocation.city);
      queryResponse[0].state.should.equal(testLocation.state);
      queryResponse[0].description.should.equal(testLocation.description);
      done();
    })
    testCreateLocation(testLocation);
  });
});