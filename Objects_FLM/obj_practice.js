let details = {
    name : "luffy",
    age : 22,
    address : "Hyd",
    phone : 1234

}

//1)Update name 
details.name = "Vamshi" //details["name"] = "vamshi"

//2)print name value

console.log(details.name);

//3)new property with pincode

details.pincode = 506319;

//4)delete phone number

delete details.phone;

//5)iterate and print keys 

for(let i in details){    //using for in loop
    console.log(i);
}

//6)iterate and print values

for(let j in details){       //using for in loop
    console.log(details[j]);
}

//7)iterate and print keys and values

for(let c in details){
    console.log(c, ":" ,details[c]);
}