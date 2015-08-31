var insertPoint = require('../db/insertPoint');

describe('postGIS Queries', function() {
  describe('insertPoint()', function() {
    it ('should insert a point into the database, along with any provided data', function(done) {
      console.log(insertPoint(25,25, {name: "Falafel House"}));
    });
  });
});