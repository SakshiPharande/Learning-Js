//JavaScript uses prototypal inheritance to allow objects to inherit properties and methods from another object.

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to Person's prototype
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const sakshi = new Person("Sakshi", 25);
  sakshi.sayHello(); // Output: Hello, my name is Sakshi
  