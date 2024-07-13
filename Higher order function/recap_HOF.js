//reduce function - it wii take 2 arguments - 1)Call back function 2) initial value anmd within call back function it will take two arguments i)element , ii)accumulator

//it takes an array and return a single value.

//1)find the sum of the all elements in the below array.

let arr = [1,2,3,4,5,6,7,8,9];

  let res =   arr.reduce((element,accumulator)=>{   //as this is returning we are capturing the same in res variable
    accumulator = accumulator+element;          //short way of writing the same function alet res = arr.reduce((element,accumulator)=>(accumulator = element +accumulator),0)

        return accumulator;
    },0)
console.log(res);

//map - it will always return the same length of array

//1)give me the output as an array with the multiplications of 3 with below given array
let arr2 = [1,2,3,4,5];

let newArr = arr2.map((element)=>{
    return element*3;
});
console.log(newArr);   //[ 3, 6, 9, 12, 15 ]


//filter - it will also return a new Arry but the length of the new array varies on the condition

let arr3 = [1,2,3,4,5,6]

//1)return even numbers array
let evenArr = arr3.filter(function(element){
    return element%2 == 0;
})

console.log(evenArr);  //[ 2, 4, 6 ]


//forEach - it will not return any array, it is just used to iterate over an array
//if we try to return from foreach it will give undefined

//1)print all the elements from below array

let arr4 = [1,2,3,4,5,6];

arr4.forEach((element)=>{
console.log(element);
});

//sort - it is used to sort numbers either ascending or descending order.

//1)sort the below numbers from below array

let arr5 = [100,2,33,41,55,6,8];
let sorted = arr5.sort(function(a,b){
           //return a-b;  //a-b gives ascending order  //a-b and b-a is not substraction here, it has some logic internally from sort function
          return b-a;  //b-a gives descending order
})
console.log(sorted);


arr5.sort(function(a,b){ //so here we are not assigning to a variable even it is returned because sort() will modify the existing array here i.e arr5
    
   return b-a;  
})
console.log(arr5);