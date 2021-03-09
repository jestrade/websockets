const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const dotenv = require('dotenv').config();
const { handleSocket } = require('./socket');

const port = process.env.PORT || process.env.HTTP_PORT;
handleSocket(io);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(port, () => {
  console.log(`server running in port ${port}`);
});
