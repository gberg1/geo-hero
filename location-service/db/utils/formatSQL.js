module.exports = function(sqlString) {
  sqlString = sqlString.replace('\t', '');
  sqlString = sqlString.replace('\r', '');
  sqlString =  sqlString.replace('\n', '');
  return sqlString;
}