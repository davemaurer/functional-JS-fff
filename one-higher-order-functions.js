// Higher order functions: functions are values in JS.

// Below we create an anonymous function and assign it to the variable triple
var triple = function (x) {
  return x * 3
};

// now we can reassign the function to another variable, whereas in Ruby for example, we can only
// assign the return value of the function/method to a variable.

var waffle = triple;

// In Ruby this below would not work, but in JavaScript you can use a variable that holds a function
// as if it were the function itself.

console.log(triple(30));
