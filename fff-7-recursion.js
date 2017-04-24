// What: When a function calls itself until it doesn't, aka, a condition is met. This does not always
// need to be a stop condition like until this happens or while. It can be a forEach that iterates
// over a collection a set amount of times, calling the parent function again for each iteration.

let countDownFrom = (num) => {
  if (num === 0) return;
  console.log(num);
  countDownFrom(num - 1)
};

countDownFrom(10);

// Why: A loop would suffice, but recursion can do things that loops cannot.

let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'golden', 'parent': 'dogs' },
  { id: 'calico', 'parent': 'cats' },
];

let makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id));
  return node
};

// forEach here will cause recursion until it iterates over each thing in categories, so no need to
// use a stop condition.

// JSON.stringify to make a messy console log more clear
console.log(
  JSON.stringify(
  makeTree(categories, null)
  , null, 2)
);
