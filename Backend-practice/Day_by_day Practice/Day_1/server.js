const http = require('http');


const server = http.createServer((req, res) => {
  res.end('Hello from the server')
});           // So here server is created



server.listen(3000, () => {
  console.log("Server is running on port 3000")
})
