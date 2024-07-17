//Ecma script - an org handed over the Javascript and used to roll out the updates as ES1, Es2  so on

//till ES5 we only have var

//in ES6 we have major updates like introducing let and const variable declarations
 
// {
//     //block scope
// }

//we can also use let and const as global variables

var password = "Vamshi krishna"  //global scope - if it is not present in any block its the global scope
{
    let password = "vamshi";
    console.log(password);
}

//console.log(password); //ReferenceError: password is not defined - because let and const are block scoped so we cannot access outside

console.log(password);



{
    let a = 30;
    var a = 10;    //SyntaxError: Identifier 'a' has already been declared - here we are declaring the a again which is declared in above line 30
    console.log(a);  
}
console.log(a);

{
    var username = "Mark";
}
console.log(username); //output : Mark    //even the username is defined in the block we can still call it outside because it's a var but incase of let and const it will throw an error





