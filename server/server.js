const express = require('express');

const app = express();
const PORT = 5000;

// app.use(express.static('server/public'));
app.get('/', function (req, res) {
  res.send('Happy Wednesday');
});

app.listen(PORT, function () {
  console.log('WOO BOI!!!');
});