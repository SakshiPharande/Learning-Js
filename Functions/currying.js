//Currying converts a function with multiple arguments into a sequence of functions that each take one argument.

function add(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  
  console.log(add(2)(3)(4)); // 9
  