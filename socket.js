const { messages } = require('./model');

const handleSocket = (io) => {
  io.on('connection', (socket) => {
    console.log(`nuevo cliente ${socket.id}`);
    socket.emit('messages', messages);

    socket.on('new-message', (message) => {
      message.id = Date.now();
      messages.push(message);
      io.emit('messages', messages);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};

module.exports = { handleSocket };
