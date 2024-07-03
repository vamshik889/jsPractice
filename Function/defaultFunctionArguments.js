let add = function(a,b){       //arguments and this are the Default arguments
    console.log(arguments);  //[Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 } the arguments argument is by default passed
return a+b;
};                         

console.log(add(10, 20, 30, 40));