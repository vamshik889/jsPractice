// **Converting an Object to an Array: Multiple Methods**

// The object we want to convert to an array
const obj = { '0': 1, '1': 2, '2': 3, '3': 4 };

// **1. Using Object.values()**
// This method extracts all values from the object and returns them as an array.
const arrayUsingValues = Object.values(obj);
console.log(arrayUsingValues); // Output: [1, 2, 3, 4]

// **2. Using Object.keys() and map()**
// This method first gets the keys of the object and then maps over them to extract the values.
const arrayUsingKeys = Object.keys(obj).map((key) => obj[key]);
console.log(arrayUsingKeys); // Output: [1, 2, 3, 4]

// **3. Using Object.entries()**
// This method gets an array of key-value pairs. Using map(), we extract only the values.
const arrayUsingEntries = Object.entries(obj).map(([key, value]) => value);
console.log(arrayUsingEntries); // Output: [1, 2, 3, 4]

console.log("vamshi",Object.entries(obj))

// **4. Using Array.from()**
// If the object keys are numeric and sequential like an array, Array.from() can directly convert the values.
const arrayUsingArrayFrom = Array.from(Object.values(obj));
console.log(arrayUsingArrayFrom); // Output: [1, 2, 3, 4]

// **5. Using a for...in Loop**
// This approach manually iterates over the object and pushes the values into a new array.
const arrayUsingForIn = [];
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    arrayUsingForIn.push(obj[key]);
  }
}
console.log(arrayUsingForIn); // Output: [1, 2, 3, 4]

// **Preferred Method**
// If you simply need the values without any additional processing, Object.values(obj) is the cleanest.
console.log("Preferred Method Output:", Object.values(obj)); // Output: [1, 2, 3, 4]
