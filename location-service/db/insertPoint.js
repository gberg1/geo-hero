var db = require('./db');
var formatSQL = require('./utils/formatSQL');

var insertPoint = function(latitude, longitude, data) {
  columnSQL = "";
  valueSQL = "";
  for (var key in data) {
    columnSQL += `,${key}`
    if (typeof data[key] === 'string') {
      valueSQL += `,'${data[key]}'`
    }
    else {
      valueSQL += `,${data[key]}`
    }
  }

  var insertSQL = `INSERT INTO geotest (geo${columnSQL}) 
                   VALUES (ST_GeomFromText('POINT(${latitude} ${longitude})')${valueSQL})`

  return db.raw(insertSQL).then(function(response) {
    console.log(response);
    db.raw('SELECT * FROM geotest').then(function(response) {
      console.log(response);
    });
  });
}

module.exports = insertPoint;