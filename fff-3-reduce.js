// reduce can perform any list (array) transformation that isn't solved by a
// built in function.

var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

var totalAmount = 0;

for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
}

console.log(totalAmount);
