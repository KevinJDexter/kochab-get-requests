const express = require('express');

const app = express();
const PORT = 5000;
const quotes_data = require('./all-quotes');

//   app.get('/', (req, res) => {
// res.send('Happy Wednesday');
// });

app.use(express.static('server/public'));

app.get('/all-quotes', (req, res) => {
  res.send(quotes_data);
});

app.get('/quote', (req, res) => {
  let randomQuote = quotes_data[Math.floor(Math.random() * quotes_data.length)];
  res.send(randomQuote);
})

app.listen(PORT, () => {
  console.log('WOO BOI!!!');
});