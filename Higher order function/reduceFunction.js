//HOF inbuilt function

//we use HOF only for array.

/*Syntax: forEach
         forEach(callbackFn)
         forEach(callbackFn, thisArg) */



//Syntax:
  //       reduce(callbackFn)
  //       reduce(callbackFn, initialValue)

let array = [1, 2, 3, 4];
                                                     
let result = array.reduce(function (sum, element) {  // here function (sum, element)a call back function with accumulator,current value respectively and 0 is initial value 
                                                     
     
  if (element % 2 == 0) {
    sum = sum + element;
  }
  return sum;
}, 0);

console.log(result);

//HOF---> reduce---> it will return a single value .
