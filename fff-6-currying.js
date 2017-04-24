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

var fluffy = dragon('fluffykins');
var tinyFluffy = fluffy('tiny');
var tinyFluffyWithLightning = tinyFluffy('Lightning');

console.log(tinyFluffyWithLightning);

// most functional libraries have a way to make non-curried functions curryable.

import _ from 'lodash'

var dragon = (name, size, element) =>
name + ' is a ' +
size + ' dragon that breathes ' +
element + '!';

dragon = _.curry(dragon);

var fluffy = dragon('fluffykins');
var tinyFluffy = fluffy('tiny');


console.log(tinyFluffy('lightning'));

// above we only break out two of the arguments into functions, then console.log the last function with the
// argument of lightning.

// Currying is useful when you

let dragons = [
  { name: 'fluffykins', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' },
  { name: 'haster', element: 'ice' }
];


//before curry
// let hasElement =
//   (element, ojb) => obj.element === element;
//after curry
let hasElement =
  _.curry((element, obj) => obj.element === element);

//before curry
// let lightningDragons =
//   dragons.filter(x => hasElement('lightning', x));

// after curry
let lightningDragons =
  dragons.filter(hasElement('lightning'));

console.log(lightningDragons);
