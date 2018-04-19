const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const quotes_data = require('./modules/all-quotes');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/all-quotes', (req, res) => {
  res.send(quotes_data);
});

app.get('/quote', (req, res) => {
  let randomQuote = quotes_data[Math.floor(Math.random() * quotes_data.length)];
  res.send(randomQuote);
});

app.post('/add-quote', (req, res) => {
  quotes_data.push(req.body);
  res.send(200);
});