

let details = {
    name : "vamshi",
    age : 24,
    hobbies : ["Reading", "watching movies"],
    address : {
        pin : 506319,
        village : "Pocharam",
        mandal : "parkal"
    }
}
//console.log(details.hobbies[0]) //to access only particular element using index from an array property

//console.log(details.address.village)  //access the properties from nested objects

//for in loop to get the keys and values 

for(let i in details){
    console.log(i);  //to print all keys
    console.log(details[i]);  // to print all; values
}

