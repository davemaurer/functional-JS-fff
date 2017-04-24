// In JavaScript, functions are closures. The function body has access to variables defined outside the body.

var me = 'Dave';
function greetMe() {
  console.log('Hello, ' + me + '!')
}
greetMe();

// me can be used inside of the greetMe function because of closure. It gives functions access to outer
// variable scope.


