// In JavaScript, functions are closures. The function body has access to variables defined outside the body.

var me = 'Dave';
function greetMe() {
  console.log('Hello, ' + me + '!')
}
greetMe();

// me can be used inside of the greetMe function because of closure. It gives functions access to outer
// variable scope.

me = 'Maurer';

greetMe();

// use case example.

function sendRequest() {
  var requestID = '123';
  $.ajax({
    url: '/myUrl',
    success: function(response) {
      alert('Request' + requestID + 'returned')
    }
  });
}

// above when the call successfully completes, the callback has access to the requestID even though that variable
// was declared outside the function.


