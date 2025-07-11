let http = require('http');

let app = http.createServer((req, res) => {
  res.end('Hello world');
});

app.listen('3000', () => {
  console.log('Server is running on port 3000');
});
