const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to Node.js Scalability Analysis!\n');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});