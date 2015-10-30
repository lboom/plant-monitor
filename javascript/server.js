// simple express server to display plant data
var express = require('express');
// not yet in use
var sql = require('sqlite3');
var ex = express();

// no data to return, just placeholder
//  TODO:
//  an input page for new plants
//  database connection(sqlite?)
ex.get('/', function(req, res) {
  res.send('Worked!');
});

// server
var server = ex.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log("Plant server started on %s, port %s", host, port);
});
