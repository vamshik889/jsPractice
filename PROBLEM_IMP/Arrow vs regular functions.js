// **Code Examples: Regular Function vs. Arrow Function**

// **1. Syntax and `this` Binding**

// Regular Function Example
function sayHelloRegular() {
    console.log("Hello from Regular Function!");
    console.log(this); // `this` depends on how the function is called
  }
  sayHelloRegular(); // `this` refers to the global object in non-strict mode
  
  // Arrow Function Example
  const sayHelloArrow = () => {
    console.log("Hello from Arrow Function!");
    console.log(this); // `this` refers to the surrounding lexical context
  };
  sayHelloArrow(); // `this` is the same as the outer scope
  
  // **2. Constructor Usage**
  
  // Regular Function as Constructor
  function PersonRegular(name) {
    this.name = name; // `this` binds to the new instance
  }
  const person1 = new PersonRegular("John");
  console.log(person1.name); // Output: "John"
  
  // Arrow Function as Constructor (Not Possible)
  const PersonArrow = (name) => {
    this.name = name; // Arrow functions do not bind their own `this`
  };
  // const person2 = new PersonArrow("Jane"); // Uncommenting this line throws TypeError: PersonArrow is not a constructor
  
  // **3. `arguments` Object**
  
  // Regular Function Example
  function sumRegular() {
    console.log(arguments); // Logs an array-like object of arguments
    return Array.from(arguments).reduce((acc, cur) => acc + cur, 0);
  }
  console.log(sumRegular(1, 2, 3, 4)); // Output: 10
  
  // Arrow Function Example
  const sumArrow = (...args) => {
    console.log(args); // Uses rest parameter to capture arguments as an array
    return args.reduce((acc, cur) => acc + cur, 0);
  };
  console.log(sumArrow(1, 2, 3, 4)); // Output: 10
  
  // **4. Implicit Return**
  
  // Regular Function Example
  function multiplyRegular(a, b) {
    return a * b; // Explicitly returning the result
  }
  console.log(multiplyRegular(3, 4)); // Output: 12
  
  // Arrow Function Example
  const multiplyArrow = (a, b) => a * b; // Implicitly returns the result
  console.log(multiplyArrow(3, 4)); // Output: 12
  
  // **5. Callback Functions**
  
  // Regular Function as Callback
  const numbers = [1, 2, 3, 4, 5];
  const doubledRegular = numbers.map(function (num) {
    return num * 2; // Explicitly returning the result
  });
  console.log(doubledRegular); // Output: [2, 4, 6, 8, 10]
  
  // Arrow Function as Callback
  const doubledArrow = numbers.map((num) => num * 2); // Implicit return
  console.log(doubledArrow); // Output: [2, 4, 6, 8, 10]
  