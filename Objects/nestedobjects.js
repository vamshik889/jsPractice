// basically object is a memory location on the heap

let obj1 = {
    name:"vamshi",
    education:{}  //empty inner object
};

let obj2 = {   //nesting of objects
    vehicles : "Cars",
    brands : {
    brand1  : "TATA",
    brand2 : "Maruti",
    price :{
        TATA : 100000,
        Maruti : 99999,
        "123" : "invalid property name to check the access with bracket notation"
    }
    }
};

obj2.brands.brand3 = "Suzuki";
obj2.brands.price.Suzuki = 88888;


//accessing the properties of inner objects
console.log(obj2);

console.log(obj2.brands.price.TATA);

console.log(obj2.brands.price["123"]);

console.log(obj2.brands.price.Suzuki);
