//spread operator is used to create a new copy by combinig two or more arrays or objects 
//Spread operator is introduced in ES6

//arrays

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

let arr3 = [...arr1, ...arr2];  //[1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr3);

let obj1 ={
    name:"vamshi",
    age : 24
}
let obj2 = {
    ...obj1,          //we are copying the obj1 data 
    place:"Hyderabad"
}
console.log(obj2);  //output : { name: 'vamshi', age: 24, place: 'Hyderabad' }