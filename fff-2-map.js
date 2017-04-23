var animals = [
  {name: 'Fuzzy', species: 'cat'},
  {name: 'Rex', species: 'dog'},
  {name: 'Shiva', species: 'dog'},
  {name: 'Harold', species: 'turtle'},
  {name: 'Speedy', species: 'Mongoose'},
  {name: 'One-eye', species: 'Fish'},
];

// implementing map with a for loop

var names = [];
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}

console.log(names);

// and with the map function

var names = animals.map(function(animal) {
  return animal.name
});

console.log(names);

// using ES6 arrow functions

var names = animals.map((animal) => animal.name);

console.log(names);
