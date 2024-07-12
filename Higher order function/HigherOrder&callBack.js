//A function which takes the another function as argument

function foo(a){  //foo is higher ordr function
a();
}
foo(function(){  //Call back function
    console.log("this is child function");
})

// A function which is passed as an argument in another function is called Callback function


//1)write a function to return an array of even numbers from given array

function even(a){
    let evenArr = [];
    for(let i =0;i<a.length;i++){
        if(a[i]%2 == 0){
            evenArr.push(a[i]);
        }
    }
    return evenArr;
}

// let res = even([1,2,3,4,5,6]);
// console.log(res);

function addEven(evenFun,array){  //evenFun is a function which is passed in line 37 , array is we are just accepting an array as parameter
    let sum = 0;                     //addEven() function is the Higher order function and evenFun which is even() function is a call back function
    let evennum = evenFun(array);
    for(let k =0;k<evennum.length;k++){
        sum+=evennum[k];
    }
    console.log(sum)  
    
}
addEven(even,[1,2,3,4,5,6]);  //passing the even() function as argument to addeven() function with parameter name as evenFun

