//1)Normal function

function name1(x){  //x is parameter 
console.log(x);
}
name1("vamshi");  //"vamshi" is argument


//2)Anonymous function - a function doesnot have a name but we can call it by assigning to some variable

let print1 = function(y){
    console.log(y);
}
print1("krishna");

//3)Arrow function (anonymous arrow function) 

let print2 = (c) => {  //arrow function is like anonymous function but doesnot have the function keyword
    console.log(c)
}
print2("domala");