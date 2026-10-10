import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on http://localhost:${process.env.SERVER_PORT}`);
});