//^ Yaha server declare kia gaya ki vo http se banaya jaraha h:-
const http = require('http');

//^ Yaha server create ho gya hai or iske baad callback se uski programming hogi:-
let server = http.createServer((req, res) => {
  //* Or ye data vo ab response dega:-
  res.end('Hello world from the server');
});

//^ Yaha hamara server start ho gaya h:-
server.listen(3000, () => {
  console.log('Server is rinning on port 3000');
});
