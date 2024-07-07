
//flat is an inbuilt method

/* 1)If you call flat() without any arguments, it defaults to a depth of 1. 

*/


let arr = [1,2,3,[4,5],[6,7,[8,9,[10,11]]]]  //The array arr has elements at different levels of nesting

let res = arr.flat(3)  //The method flat(3) will flatten the array up to a depth of 3 levels.

console.log(res);

//2)Infinity Depth: If you want to flatten an array to any depth, you can use flat(Infinity).

let infiniteFlatten = arr.flat(Infinity);
console.log(infiniteFlatten);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
