
$(document).ready(async function () {

  let pageTitle = 'Online Shopping';
  let cartTotal = 100;
  appendData();


  $('.home').click(function () {
    localStorage.clear();
    window.location.href = 'index.html';
  })

  $('#authenticated').click(function () {

    window.location.href = 'authenticated.html';

  })
  $('#unauthenticated').click(function () {

    localStorage.clear();
    window.location.href = 'unauthenticated.html';

  })


  function appendData() {
    $('#cartTotal').val(cartTotal);
    $('#pageTitle').text(pageTitle)
  }



});

