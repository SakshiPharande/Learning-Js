/*
1. Destructuring – Extracting Values Easily
Destructuring allows you to extract values from arrays and objects and assign them to variables in a cleaner way.
*/

const numbers = [1, 2, 3];

// Without destructuring
const first = numbers[0];
const second = numbers[1];

// With destructuring
const [a, b, c] = numbers;
console.log(a, b, c); // Output: 1 2 3



const user = { name: "Alice", age: 25 };

// Without destructuring
const name1 = user.name;
const age1 = user.age;

// With destructuring
const { name, age } = user;
console.log(name, age); // Output: Alice 25


/**
 2. Spread (...) and Rest (...) Operators
The spread operator is used to copy, merge, or expand elements, while the rest operator is used to gather remaining values.
 */

const newNumbers = [...numbers, 4, 5]; 
console.log(newNumbers); 

const newObj = { ...user, city: "New York" }; 
console.log(newObj); 

// rest operator
const [x, y, ...rest] = [1, 2, 3, 4, 5];
console.log(x, y); 
console.log(rest); 


//reduce() – Aggregate Values
const numarray = [1, 2, 3, 4];
const sum = numarray.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
