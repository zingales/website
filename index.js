'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});