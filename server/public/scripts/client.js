console.log('client.js is loaded');

$(document).ready(onReady);

function onReady () {
  console.log('jQuery is loaded');

  $.ajax({
    type: 'GET',
    url: '/all-quotes'
  })
  .then(function(response) {
    console.log(response);
  });
}
