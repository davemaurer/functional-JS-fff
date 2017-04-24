// Currying - when a function doesn't take all of it's arguments at once. It takes one argument at a time,
// returning a new function each time that will expect the next argument in line.

// non-curried version of a function that returns output based on three passed arguments
var dragon = (name, size, element) =>
  name + ' is a ' +
  size + ' dragon that breathes ' +
  element + '!';

console.log(dragon('fluffykins', 'tiny', 'lightning'));

// curried version of the same function


var dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!';

console.log(dragon('fluffykins')('tiny')('lightning'));

// you can also break out a curried function into separate executions, since each returns a new function.

let fluffy = dragon('fluffykins');
let tinyFluffy = fluffy('tiny');
let tinyFluffyWithLightning = tinyFluffy('Lightning');

console.log(tinyFluffyWithLightning);


