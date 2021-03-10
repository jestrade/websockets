const express = require('express');
const socket = require('socket.io');
const dotenv = require('dotenv');
const { handleSocket } = require('./socket');

const app = express();
app.use(express.static('public'));
dotenv.config();
const port = process.env.PORT || process.env.HTTP_PORT;
const server = app.listen(port);

const io = socket(server);
handleSocket(io);
