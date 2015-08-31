var createUser = require('../db/queries/createUser');
var db = require('../db/db');
var Promise = require('bluebird');
var should = require('should');

describe('createUser()', function() {
  var testUser = {name: "Joe Schmoe", username: "musclehamster", email:"musclehamster@gmail.com"};

  after(function(done) {
    db('users').delete().where({username: testUser.username}).then(function() {
      done();
    });
  });

  it ('should insert a user into the database', function(done) {
    var testCreateUser = Promise.coroutine(function*(user) {
      yield createUser(user);
      var queryResponse = yield db('users').select('*').where({username: 'musclehamster'});
      queryResponse[0].username.should.equal(testUser.username);
      queryResponse[0].email.should.equal(testUser.email);
      queryResponse[0].name.should.equal(testUser.name);
      done();
    })
    testCreateUser(testUser);
  });
});