const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.write('Hello from Jenkins CI/CD Pipeline!');
  res.end();
});

server.listen(PORT, () => {
  console.log(Server running at http://localhost:3000);
});
