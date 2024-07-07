
//Variable hoist with var keyword
//we will get undefined here because as the variables are declared with var keyword they are first hoisted to the top of code and doesnt assign any value
//hoisted is nothing but moving to the top but not physically here
//eg: here before print statements var a , b are just declared but doesnot have any value assigned - this is called hoisting


console.log(a);  //undefined
console.log(b);  //undefined

var a = 5, b = 9;

//Incase of let and const keyword we will get reference error, hence in this case also the variables c, d are hoisted but they are not assigned with undefined value hence it will throw the Reference error


// console.log(c); //ReferenceError: Cannot access 'c' before initialization
// console.log(d); //ReferenceError: Cannot access 'c' before initialization

// let c= 6, d= 7;

//Eg3):

let def_rate = 1;
let  rate = 5;

function getrate(){
    if(!rate){
        rate = def_rate;
    }
    return rate;
}
console.log(getrate());
