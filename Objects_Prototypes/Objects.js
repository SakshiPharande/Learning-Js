//Object.assign() & Spread Operator (...) Used to merge objects or copy object properties.

// Example 1: Merging Objects Using Object.assign()
const obj1 = { name: "Sakshi", age: 25 };
const obj2 = { role: "Developer" };

const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);

// Example 2: Merging Using the Spread Operator (...)
const mergedObj2 = { ...obj1, ...obj2 };
console.log(mergedObj2);
