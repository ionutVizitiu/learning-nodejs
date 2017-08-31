const express = require('express');
const app = express();
const port = process.env.PORT || 3093;

// this is a middleware
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (req, res, next) => {
  console.log('request url: ' + req.url);
  next();
});

app.get('/', (req, res) => {
  res.send(
    '<html><head><link href="/assets/style.css" type="text/css" rel="stylesheet"></head><body><h1>Hello</h1></body></html>');
});

app.get('/person/:id', (req, res) => {
  res.send(`<html><head></head><body><h1>Hello ${req.params.id}</h1></body></html>`);
});

app.get('/api', (req, res) => {
  res.json({ first: 'john', last: 'doe' });
});

app.listen(port);
