console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery is loaded');

  $('#btnQuote').on('click', callQuotesHandler);
  $('#btnSubmit').on('click', submitNewQuote);

  createQuoteList();
  callQuotesHandler();
}

function createQuoteList() {
  $.ajax({
    type: 'GET',
    url: '/all-quotes'
  })
    .then(function (response) {
      $('#quoteList').empty();
      response.forEach(element => {
        let listItem = `<li>${element.quote} - ${element.author}</li>`
        $('#quoteList').append(listItem);
      });
    });
}

function callQuotesHandler() {
  $.ajax({
    method: 'GET',
    url: '/quote'
  })
    .then(function (response) {
      $('#randomQuote').text(`${response.quote} - ${response.author}`);
    });
}

function submitNewQuote() {
  let newQuote = {
    quote: $('#quoteInput').val(),
    author: $('#authorInput').val()
  }
  $.ajax({
    method: "POST",
    url: '/add-quote',
    data: newQuote
  })
    .then(function (response) {
      createQuoteList();
      $('#quoteInput').val('');
      $('#authorInput').val('');
    })
}