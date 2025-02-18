
const x = 10;
function outer(){
    console.log("x",x);
    console.log("y",y)
}

outer(); //x 10 , ReferenceError: Cannot access 'y' before initialization
const y = 20;
outer(); // x 10 y 20

/////////////////////////////

// Lexical Scoping and `this` in JavaScript

// **Lexical Scoping**: In JavaScript, **lexical scoping** means that a function's 
// `this` context is determined by where the function is defined, not by where it is called.

// **Arrow Functions**: Do not have their own `this`. They inherit `this` from the **lexical scope** in which they are defined.

// **Normal Functions**: Bind their own `this` based on how they are called (i.e., the object the method is a part of).

// Example with Arrow Function (Incorrect `this` Binding)
const obj1 = {
    name: "Vamshi",
    age: 25,
    greet: () => { // Arrow function doesn't have its own `this`
        console.log(this.name); // `this` refers to the lexical scope (global object)
    }
};

obj1.greet(); // Output: undefined (because `this` refers to the global object)

// Explanation:
// Arrow functions inherit `this` from the **lexical scope** in which they were created.
// In this case, `greet` is an **arrow function**, so `this` refers to the **global context**, not `obj`.
// Result: `this.name` is `undefined`, because the global object (`window` in a browser) doesn't have a `name` property.


// Example with Normal Function (Correct `this` Binding)
const obj2 = {
    name: "Vamshi",
    age: 25,
    greet: function() { // Normal function has its own `this`
        console.log(this.name); // `this` correctly refers to the `obj` object
    }
};

obj2.greet(); // Output: "Vamshi" (because `this` refers to `obj`)

// Explanation:
// Normal functions (non-arrow functions) bind their `this` based on how they are called.
// When `greet` is called as `obj2.greet()`, `this` refers to the `obj2` object, so `this.name` is `"Vamshi"`.


// Summary:
// - Arrow functions inherit `this` from the surrounding lexical scope, meaning they don't have their own `this` binding.
// - Normal functions bind their own `this` to the object they are called on (in this case, `obj2`).
// - If you need to access properties of an object using `this`, use normal functions inside objects.


