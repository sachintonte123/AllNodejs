var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3001, '10.1.31.129');
console.log('Server running at http://10.1.31.129:3001/');