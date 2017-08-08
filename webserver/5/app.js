const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const obj = {
    firstName: 'john',
    lastName: 'doe'
  };

  res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');