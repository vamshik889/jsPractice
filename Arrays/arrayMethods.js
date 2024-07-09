let a = [10,20,"hello",{}]  // {} is an empty object here

a.push(33,55, "vamshi"); //adds elements to the last

console.log(a);

a.pop()  //removes an element from last
console.log(a);

a.shift() //removes the first element 
console.log(a);

a.unshift("FLM", "TATA")  //adds elements to the first
console.log(a);

let arr = ["jan","march","april"]   //splice method - The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
arr.splice(1,0,"feb")   //syntax : splice(start, deleteCount, item1, item2, /* …, */ itemN)         
console.log(arr)                //[ 'jan', 'feb', 'feb', 'march' ]


//join  - The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const elements = ['Fire', 'Air', 'Water'];  //syntax : join(separator)
console.log(elements.join());  // Expected output: "Fire,Air,Water"


//indexOf - returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // Expected output: 1

//includes - The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array1 = [1, 2, 3];
console.log(array1.includes(2)); // Expected output: true



//slice - The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // Expected output: Array ["camel", "duck", "elephant"]
