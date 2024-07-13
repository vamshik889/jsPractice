//1)find the avarage of elemets present at the odd index of array

let arr = [10,24,56,72,-10,-88,100,564];
let count = 0;
let sum = 0;

arr.forEach(function(element,index){  //The parameters in the callback function are positional, so the first parameter is always the element, the second parameter is the index, and the third parameter is the array itself.
   if(index%2 === 1){
    sum+=element;
    count++;
   }

})
console.log(sum/count);

//2)create a new array from given array such that each element of new array is raised to power of 5.

let arr1 = [2,3,4,6,7];

let newArr = arr1.map((element1)=>Math.pow(element1,5));  //function(element){return math.pow(element1,5)}
console.log(newArr);

//3)Take the array and print the following output 
//output : 3-5-7

let arr2 = [3,4,5,6,7];
let str ="";
arr2.forEach(function(element,index){
    if(index%2 === 0){
       str+=element;
    }
    else{
        str+= " - ";
    }
})
console.log(str);