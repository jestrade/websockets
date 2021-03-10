const express = require('express');
const dotenv = require('dotenv');
const { handleSocket } = require('./socket');
dotenv.config();

const app = express();
const port = process.env.PORT || process.env.HTTP_PORT;

app.use(express.static('public'));

const server = app.listen(port);
handleSocket(server);
