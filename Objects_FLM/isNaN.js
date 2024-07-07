//Nan - Not a Number
//The isNaN function in JavaScript checks whether a value is NaN (Not-a-Number). It returns true if the value is NaN and false otherwise.
//When you call isNaN(123), it evaluates whether 123 is NaN. Since 123 is a valid number, isNaN(123) returns false.

console.log(isNaN(123)); // false
console.log(isNaN('123')); // false, because '123' can be converted to the number 123
console.log(isNaN('abc')); // true, because 'abc' cannot be converted to a number
console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true, because undefined cannot be converted to a number
console.log(isNaN(null)); // false, because null is converted to 0 which is a number

console.log(3+true+false);   //output : 4 --> here true = 1 and false = 0, hence 3+1+0 = 4