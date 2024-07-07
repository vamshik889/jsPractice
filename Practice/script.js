var a = 2;  //The first var a = 2; declares a variable a and assigns it the value 2.
var a = 6;  //The second var a = 6; re-declares the same variable a and assigns it the value 6.

console.log(a); //console.log(a); prints the value of a, which is 6 because the second declaration and assignment overwrite the first one.


// let b = 7; //The first let b = 7; declares a variable b and assigns it the value 7.
// let b = 7;  //The second let b = 7; attempts to re-declare the same variable b within the same scope.
// console.log(b)  //This results in a SyntaxError because let does not allow re-declaration of the same variable within the same scope.SyntaxError: Identifier 'b' has already been declared