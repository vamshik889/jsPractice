
/*
In JavaScript, when you declare a variable with const, you cannot reassign the variable itself. 
However, if the const variable is an object or an array, you can still modify the contents of the object or array. 
This is because const prevents re-assignment of the variable itself, but it does not make the value immutable. */

const myArray = [1, 2, 3];

// Modifying the contents of the array
myArray.push(4);
console.log(myArray); // Output: [1, 2, 3, 4]

// Reassigning the array itself will cause an error
// myArray = [5, 6, 7]; // TypeError: Assignment to constant variable.


const myObject = {
    name: "Alice",
    age: 25
};

// Modifying the contents of the object
myObject.age = 26;
myObject.city = "Wonderland";
console.log(myObject); // Output: { name: 'Alice', age: 26, city: 'Wonderland' }

// Reassigning the object itself will cause an error
// myObject = { name: "Bob", age: 30 }; // TypeError: Assignment to constant variable.
