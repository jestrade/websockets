const socket = io.connect('/');

socket.on('messages', (messages) => {
  let html = '';
  messages.forEach(({ author, content }) => {
    html += `<p>- ${author} says: ${content}</p>`;
  });
  document.getElementById('messages').innerHTML = html;
});

const sendMessage = () => {
  const message = {
    content: document.getElementById('message').value,
    author: document.getElementById('author').value,
  };
  socket.emit('new-message', message);
};
