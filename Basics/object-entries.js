// Object.entries() in JavaScript
// Object.entries() is a method that returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

// Object.entries(obj)
// obj → The object whose properties you want to retrieve.
// Returns → An array of [key, value] pairs.

// When to Use Object.entries()?
// Iterating Over Objects
// Since objects are not iterable like arrays, Object.entries() helps in looping through key-value pairs.
// Converting Objects to Arrays
// It allows easy transformation of objects into an array format, useful for array-based operations (like map, filter, reduce).
// Sorting Objects by Values
// Since objects are unordered, Object.entries() can be used to sort them based on values.
// Filtering Object Properties
// You can use it to filter key-value pairs based on some condition.
// Dynamic Table Rendering
// Helps in dynamically rendering tables from object data.


// Real-Life Example

// Example 1: Iterating Over an Object
// Imagine you have a user object, and you want to display all key-value pairs dynamically.
const user = {
  name: "Sakshi",
  age: 24,
  city: "Pune"
};
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Sakshi  
// age: 24  
// city: Pune  


// Example 2: Converting an Object to an Array
// A backend API returns an object, but you need it as an array to process further.
const prices = { apple: 50, mango: 30, banana: 20 };
const priceArray = Object.entries(prices);
console.log(priceArray);
// Output:
// [ ['apple', 50], ['mango', 30], ['banana', 20] ]



// Example 3: Sorting an Object by Values
// You want to display the most expensive fruit first.
const sortedPrices = Object.entries(prices).sort((a, b) => b[1] - a[1]);
console.log(sortedPrices);
// Output:
// [ ['apple', 50], ['mango', 30], ['banana', 20] ]


// Example 4: Filtering an Object
// If you want only expensive fruits (price > 25):
const expensiveFruits = Object.entries(prices).filter(([fruit, price]) => price > 25);
console.log(expensiveFruits);
// Output:
// [ ['apple', 50], ['mango', 30] ]
