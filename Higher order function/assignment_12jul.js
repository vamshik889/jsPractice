//multiply each element with 2 and find the even numbers and give the sum of all even numbers

let arr = [1,2,3,4,5,6,7,8];

let multiOf2 = arr.map((element)=> element*2);
console.log(multiOf2);

let evenArr = multiOf2.filter((element)=>element%2 === 0 && element<10);
console.log(evenArr);
console.log(arr)

let sum = evenArr.reduce((accumulator,element)=>accumulator+=element,0);

console.log("sum of all even numbers is :", sum)