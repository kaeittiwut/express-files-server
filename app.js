const express = require('express');
const serveIndex = require('serve-index');

const app = express();

app.use(
  '/ftp',
  express.static('public'),
  serveIndex('public', { icons: true })
);

app.listen(3000, () => console.log('run on port 3000'));
