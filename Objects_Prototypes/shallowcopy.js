//  Example of Shallow Copy Issue

const obj1 = { user: { name: "Sakshi" } };

// Using Object.assign()
const copy1 = Object.assign({}, obj1);
copy1.user.name = "John";

console.log(obj1.user.name); // ❗ "John" (original object modified)

// Using Spread Operator
const copy2 = { ...obj1 };
copy2.user.name = "Emma";

console.log(obj1.user.name); // ❗ "Emma" (original object modified)
