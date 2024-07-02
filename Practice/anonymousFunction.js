let fun1 = function(age){  //anonymous function as the function doesnot have name
return age;
};                         //there is a drawback in using anonymous function - if we assign something to fun1 from line 1 as line 7 , and if we try to call the function it wont work as it got reassigned 

let c = fun1(22);
console.log(c);

// fun1 = 5;
// fun1();  //TypeError: fun1 is not a function




//Function as arguments

let fun2 = function(name){
    console.log("Hello " +name);
} 

let executor = function(age,name){  
age(name);                        //in this line we are making that whatever the paremeter is coming make it as function and execut
}

executor(fun2,"vamshi");