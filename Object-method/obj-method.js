//whenever we write a function inside a object it it called method

let obj = {                  
    name: "vamshi",
    print : function(){
        console.log("hello");    //anonymous functions are specifically made to create the object methods
    }

}
obj.print();


function foo(a = "vamshi", b = "krishna"){  //default parameters 

    console.log(a,b);                          
}

