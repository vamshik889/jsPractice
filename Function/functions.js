/* 
Functions
1)Flexible argument count
2)No function overloading
3)Default arguments
4)The arguments argument
5)Functions can be written in literal form
6)A function is a "value" that can be assigned to a variable
7)can be called by passing arguments
8)Functions are objects!

*/

///function declaration

function addNum(a,b){
    return a+b;
};
let x = addNum(9,10)
console.log(x);

//javascript function expression

var addition = function addNumbers(a,b){
    return a+b;
};
let y = addition(5,8);
console.log(y);

//anonymous function expression

var fun1 = function(a,b){
return a+b;
};
let result = fun1(9,9);
console.log(result);


//Functions as object property

var mathobj = {};
mathobj.prop1 = function(a,b){
    return a+b;
};
let res = mathobj.prop1(5,6);
console.log(res);

//Example
//person object is created with property as functions and we are checking if the person state 
//       which is passing to function "isfromState" is matching with the state property
var person = {  
    firstName : "Vamshi",
    middlename : "Krishna",
    lastname : "Domala",
    fullName : function(){
        return this.firstName+this.middlename+this.lastname;  //we are using this keyword because if we put person ref and later any object is assigned with same name , will get the conflicts and this code wont work
    },                                                        //this refers to person here (eg:person.firstName+person.middlename+person.lastname;)
    "address":{
        village : "Pocharam",
        mandal : "Parkal",
        state: "Telangana"
    },
    "isfromState": function(stat){
        return(this.address.state === stat);
    }

}
console.log(person.isfromState("Telangana"));