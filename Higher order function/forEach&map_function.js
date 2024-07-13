//The forEach() method of Array instances executes a provided function once for each array element.

//Syntax : forEach(callbackFn)
       //  forEach(callbackFn, thisArg)


let myArray = [10,20,33, "vamshi",{}];

var myfun = function(item){
    console.log("element items are " + item);
}
myArray.forEach(myfun);  //forEach accepts functions as arguments and iterates over the array

//1)foreach to print all the elements 

let array = [1,2,3,4,5,"vamshi"];

array.forEach((element)=>console.log(element))  //arrow function 
//array.forEach(function (element) {console.log(element)})  

//2)write a forEach to find all even and odd numbers in a new array using arrow function

let myArr = [1,2,3,4,5,6,7,8,9,10];
let evenArr =[];
let oddArr = [];


 let a = myArr.forEach(function(element){
        if(element%2 ==0){
    evenArr.push(element);
        }
    else{
        oddArr.push(element)
    }
        }
 )
console.log(evenArr,oddArr);

//3)write a map function to get the 3 multiplications of array elements - ** map - always return same length of array given.

let b = myArr.map((ele) => ele*3);  //arrow function is used 
console.log(b);

//4)filter - the return array length changes based on condition.

//Create a new array of odd elements from arr1
let arra1= [1,2,3,4,5,6,7,8,9,10];
let resul= arra1.filter(function(elemen){
  if(elemen%2==1){
    return elemen;
  }
});
console.log(resul);