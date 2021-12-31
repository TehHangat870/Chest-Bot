var http = require('http');

http.createServer(function (req, res) {
  res.write("Server working..");
  res.end();
}).listen(8080);