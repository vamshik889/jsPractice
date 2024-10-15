//1)Object Merging

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const obj3 = {...obj1, ...obj2};
console.log(obj3);

//2. Object Destructuring

const user = { id: 1, name: "Alice", age: 30, location: "Wonderland" };

// Extract `name` and `age` from `user` and print them

const {name , age } = user;
console.log(name,age);

/*Shallow Copy: Creates a new object with the same top-level properties as the original, but nested objects are not cloned and are shared between the original and the copy. Changes to nested objects in the copy will affect the original and vice versa.

Deep Copy: Creates a completely independent clone of the original object, including all nested objects, ensuring that changes to the copy do not affect the original. It involves recursively copying all properties, including nested ones. */

//3.Shallow copy  
//
// Original object
const original = {
    name: "Alice",
    details: { age: 30, city: "Wonderland" }
  };
  
  // Shallow copy using Object.assign
  const shallowCopy = Object.assign({}, original);
  
  // Shallow copy using spread operator
  const shallowCopy2 = { ...original };
  
  // Modifying the nested object in the copy
  shallowCopy.details.age = 31;
  shallowCopy.name = "vk";
  console.log(original.name); 
  console.log(shallowCopy.name);
  
  console.log(original.details.age); // Output: 31 (changes reflected in original)
  console.log(shallowCopy.details.age); // Output: 31


  
