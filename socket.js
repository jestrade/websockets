const socketIO = require('socket.io');
const { messages } = require('./model');

const handleSocket = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log(`se  conectó un cliente ${socket.id}`);
    socket.emit('messages', messages);

    socket.on('new-message', (message) => {
      message.id = Date.now();
      messages.push(message);

      io.emit('messages', messages);
    });

    socket.on('disconnect', () => {
      console.log(`cliente desconectado`);
    });
  });
};

module.exports = { handleSocket };
