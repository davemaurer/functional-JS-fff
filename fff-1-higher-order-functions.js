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

console.log(waffle(30));


// Higher order functions take other functions as arguments. Or another way, they use other functions.
// This allows for better composition and organization of code.

var animals = [
  { name: 'Fuzzy', species: 'cat'},
  { name: 'Rex', species: 'dog'},
  { name: 'Shiva', species: 'dog'},
  { name: 'Harold', species: 'turtle'},
  { name: 'Speedy', species: 'Mongoose'},
  { name: 'One-eye', species: 'Fish'},
];

// implementing filter using a for loop

var dogs = [];

for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
    dogs.push(animals[i])
}

console.log(dogs);

// now using JS built in filter function

var dogs = animals.filter(function(animal) {
  return animal.species === 'dog'
});

console.log(dogs);

// filter accepts another function as it's argument. This is a callback function because it is
// sent into the host function (filter) repeatedly.

// we can break the callback function out into a variable to show this more clearly.

var isDog = function(animal) {
  return animal.species === 'dog'
};

var dogs = animals.filter(isDog);

console.log(dogs);

