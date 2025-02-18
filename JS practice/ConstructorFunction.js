// Constructor function to create a Person object
function Person(name, age) {
    // 'this' refers to the new instance being created
    this.name = name; // Assign the name property to the instance
    this.age = age;   // Assign the age property to the instance
}

// Adding the 'introduce' method to the Person prototype
// This ensures that all instances of Person share the same method, rather than having a new copy for each instance.
Person.prototype.introduce = function() {
    // Returns a string introducing the person with their name and age
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Creating instances of Person by invoking the constructor function with the `new` keyword
const person1 = new Person("John", 25); // person1 has name "John" and age 25
const person2 = new Person("Alice", 30); // person2 has name "Alice" and age 30

// Calling the introduce method on both instances
console.log(person1.introduce()); // Output: "Hello, my name is John and I am 25 years old."
console.log(person2.introduce()); // Output: "Hello, my name is Alice and I am 30 years old."

/* 
-------------------------------------------------------------
🔹 **Why Use Prototypes?**
-------------------------------------------------------------
1️⃣ **Constructor Function:** 
   - When we call `new Person("John", 25)`, the `Person` constructor is invoked, creating a new object with properties `name` and `age` attached to it.
   - The `this` keyword refers to the new object in the constructor, allowing us to set its properties.

2️⃣ **Prototypes:**
   - By adding the `introduce` method to `Person.prototype`, we ensure **all instances of `Person` share the same method** instead of creating a new method for each instance. 
   - This is more **memory efficient** because only one copy of the `introduce` method exists.

3️⃣ **Method Invocation:**
   - When we call `person1.introduce()`, JavaScript looks for the `introduce` method first on the `person1` object. If it doesn't find it, it looks up the prototype chain to `Person.prototype` where it finds the method.
   
-------------------------------------------------------------
✔️ **Key Takeaway:**
   - Prototypes allow us to define methods once on a constructor function’s prototype and have them available to all instances.
-------------------------------------------------------------
*/
