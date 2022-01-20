const express = require('express');
const server = express();

const port = process.env.port || '8888';

const inventoryRouter = require('./inventory.router');

server.use('/shop/api', inventoryRouter);

server.listen(port);

console.log(`our brand new ng shop api is running on port -> ${port}`);
