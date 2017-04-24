// reduce can perform any list (array) transformation that isn't solved by a
// built in function.

var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

// using a for loop

var totalAmount = 0;

for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
}

console.log(totalAmount);

// using the reduce function

var totalAmount = orders.reduce(function(sum, order) {
  // we can console.log to see what is returned by each iteration
  console.log("current return", sum, order);
  return sum + order.amount
}, 0);

console.log(totalAmount);

// using ES6 arrow functions

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);


console.log(totalAmount);
