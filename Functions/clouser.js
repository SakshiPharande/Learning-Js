//A closure is when a function "remembers" variables from its parent function, even after the parent has finished executing.

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
      console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
  }
  
  const myClosure = outerFunction("Hello");
  myClosure("World"); // Outer: Hello, Inner: World
  