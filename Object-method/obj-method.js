//whenever we write a function inside a object it it called method

let obj = {                  
    name: "vamshi",
    hello : function(){
        console.log("hello");    //anonymous functions are specifically made to create the object methods
    },
    arr : [1,2,3,4]

}
obj.hello();
console.log(obj.arr);


function foo(a = "vamshi", b = "krishna"){  //default parameters 

    console.log(a,b);                          
}

foo("k", "s"); //if we pass arguments this will be considered
foo() // as wea re not passing any arguments the default parameters will be considered
