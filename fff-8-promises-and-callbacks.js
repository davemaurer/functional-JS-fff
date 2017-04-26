// Promises serve the same purpose that callbacks do. They execute code at a time after they are defined.
// Promises are composable.

// Callbacks are functions that are passed as arguments to other code/functions.
// callback example
var list = [5,8,9,2,7,6,3,1,4];

function callback(list) {
  var newList = [];
  for(let i = 0; i < list.length; i++) {
    if (list[i] < 5)
      newList.push(list[i]);
  }
  return newList;
}

function filter(list, callback) {
  return callback(list);
}

let filtered = filter(list, callback);

console.log(filtered);

// another callback example
let addNum = function (num, cb) {
  return cb(num);
};

let resolveFunc = function (num) {
  return num + num;
};

console.log(addNum(5, resolveFunc));

// callback example with the callback being a function defined inside the parent/higher-order function.
// this is also called inline declaration of the callback.
let fruits = ["banana", "apple", "pear"];
fruits.forEach(function(val) {
  console.log(val);
});

// asynchronous callback example using ajax

$.get("data/tweets.json", function(data) {
  console.log(data);

});
// if you then say:
console.log("test");
// the console will output "test" before it outputs the tweets object due to the callback running asynchronously.
// the same code could look like this, where the callback is broken out on it's own line.
function cb(data) {
  console.log(data);
}

$.get("data/tweets.json", cb);

console.log("test");
