//A higher-order function is a function that takes another function as an argument or returns a function.


const numbers = [1, 2, 3, 4, 5];

// map(): Applies function to each element, returns a new array
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter(): Returns only elements that match a condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce(): Accumulates values into a single result
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15


/*
array.reduce((accumulator, currentValue, index, array) => {
  // operation on accumulator and currentValue
  return newAccumulator;
}, initialValue);

accumulator – Stores the accumulated result.
currentValue – The current element in the array.
index (optional) – The index of the current element.
array (optional) – The original array being processed.
initialValue – (Optional) The initial value of the accumulator.


*/