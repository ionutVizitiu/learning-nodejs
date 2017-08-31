const express = require('express');
const app = express();
const port = process.env.PORT || 3093;

app.get('/', (req, res) => {
  res.send('<html><head></head><body><h1>Hello</h1></body></html>');
});

app.get('/api', (req, res) => {
  res.json({ first: 'john', last: 'doe' });
});

app.listen(port);
