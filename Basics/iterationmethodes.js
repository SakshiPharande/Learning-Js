const numbers = [1, 2, 3, 4, 5];
const details = {name:"sakshi", age:23, address:"pune", phone_no:8899776655}
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];

console.log("\n\n arrays")

//map() creates a new array by applying a function to each element.
const doubled  = numbers.map(num => num*2);
console.log(doubled);

//filter()
const even = numbers.filter(num => num%2==0);
console.log(even)

//sort() Mutates the Original Array If you want to preserve the original array, use .slice() before sorting.
const sortedNumbers = numbers.slice().sort((a, b) => b - a);
console.log(sortedNumbers); 


console.log("\n\n array of objects")

// maps
const names = users.map(user => user.name);
console.log(names); 

// filter
const greaterage = users.filter(user => user.age > 23);
console.log(greaterage); 

// sort
const maxtominage = users.slice().sort((a,b) => b.age - a.age );
console.log(maxtominage)

// Sort users by name (alphabetically)
const sortedByName = users.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);


console.log("\n\n objects")
const obj = { a: 30, b: 10, c: 20, d: 5 };

// Filter: Keep values > 10, Map: Double values, Sort: By value (ascending)
const result = Object.fromEntries(
  Object.entries(obj)
    .filter(([key, value]) => value > 10)    // Keep values > 10
    .map(([key, value]) => [key, value * 2]) // Double values
    .sort(([, val1], [, val2]) => val1 - val2) // Sort by value
);

console.log(result); // { c: 40, a: 60 }

