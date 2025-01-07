// Example 1: Squaring each element of an array
let numbers = [1, 2, 3, 4, 5];

let squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]

// Example 2: Converting an array of strings to uppercase
let fruits = ["apple", "banana", "cherry"];

let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "CHERRY"]

// Example 3: Extracting property values from an array of objects
let users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jack", age: 28 }
];

let names = users.map(user => user.name);
console.log(names); // Output: ["John", "Jane", "Jack"]

// Example 4: Mapping an array of numbers to their string equivalents
let numbers2 = [1, 2, 3, 4, 5];

let numberStrings = numbers2.map(num => `Number ${num}`);
console.log(numberStrings); // Output: ["Number 1", "Number 2", "Number 3", "Number 4", "Number 5"]

// Example 5: Incrementing each number in an array by a specific value
let numbers3 = [10, 20, 30, 40];

let incremented = numbers3.map(num => num + 5);
console.log(incremented); // Output: [15, 25, 35, 45]

// Example 6: Converting a list of numbers to a list of boolean values (even/odd check)
let numbers4 = [1, 2, 3, 4, 5];

let isEven = numbers4.map(num => num % 2 === 0);
console.log(isEven); // Output: [false, true, false, true, false]

// Example 7: Mapping an array of objects and adding a new property
    let products = [
        { name: "Laptop", price: 1000 },
        { name: "Phone", price: 500 },
        { name: "Tablet", price: 300 }
    ];

let productsWithDiscount = products.map(product => {
    return { ...product, discountPrice: product.price * 0.9 };
});
console.log(productsWithDiscount);
/* Output:
[
  { name: "Laptop", price: 1000, discountPrice: 900 },
  { name: "Phone", price: 500, discountPrice: 450 },
  { name: "Tablet", price: 300, discountPrice: 270 }
]
*/

let books = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

let books1 = books.map((book)=>{
    return {...book,newprop:book.price*10};
})
console.log(books1)