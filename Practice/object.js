// we can create objects without classes 
//Objects contains properties and methods

let myObj = {};  //empty object  - 1)creating an object inline
//console.log(myObj);
myObj.prop1 = "Vamshi";  //adding a new property to the Object by assigning using = 
myObj.prop2 = 25;

console.log("Property 2 is "+myObj.prop2);

//2)creating an Object by Object literal - here we will create properties by separating with colon :

var myObj2 ={
    prop1 : 123,
    prop2 : "Hyd",
    prop3 : true
};

console.log(myObj2.prop1);

console.log("Property 2 is " + myObj2.prop2 + " " + myObj2.prop3);

// dot and bracket notation to access properties of objects

var myObj3 ={
    prop1 : 123,
    prop2 : "Hyd",
    prop3 : true,
    var1 : 333,
     "1": 1777        //to access this property we need to use the bracket notation
   
};

console.log(myObj2.prop1);  // dot notation

/* Square bracket notation :
 it is used incase of 
 1)property name is a reserved word 
 2) invalid identifier 
 3) property name is dynamic 

 
 */

console.log(myObj2["prop2"]);  // square bracket notation - 

console.log(myObj2["1"]);  // square bracket notation

console.log(myObj2.prop1);

console.log(myObj2.var1);


console.log(Object.keys(myObj2));   //to get the object keys

console.log(Object.values(myObj2));  //to get the object values

console.log(Object.entries(myObj2));   //to get the object entries

Object.assign(myObj2, myObj);  //assigning an object to another object - here myObj2 is assigned to myObj

console.log(myObj);
