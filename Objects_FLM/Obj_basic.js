
let details = {
    name:"vamshi",
    age : 24,
    address : "Hyd"
}

details.pincode = 506319;  //Adding a property of the details object using dot notation
details["village"] = "Pocharam";

//Accessing the object properties

//1) dot notation

console.log(details.address);  

//2)Square bracket notation

console.log(details["pincode"]);

console.log(details["village"]);

//Update data in objects  and adding data in objects has same syntax but if the key is already exists it will just update the existing or if key is not there it will create a new key and value

details.age = 33;  
details.address = "delhi"
console.log(details.age);
console.log(details.address);

//Delete the properties from an object using delete keyword

delete details.age;  //delete details["age"]
console.log(details);


