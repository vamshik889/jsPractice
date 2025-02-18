const obj = {
    name:"vamshi",
    age:25,
    school:{
        schoolName:"GKP",
        rollNo:33
    }
}

//SHALLOW COPY

// 1)
const obj2 = {name:"vk"};
Object.assign(obj2,obj);  //Synatx : Object.assign(target,reference object)
console.log(obj2) // output : { name: 'vamshi', age: 25, school: { schoolName: 'GKP', rollNo: 33 } }

// 2)

const obj3 = {...obj};
console.log(obj3)  //{ name: 'vamshi', age: 25, school: { schoolName: 'GKP', rollNo: 33 } }

obj3.school.rollNo = 44;  //as it is a property of nested object , the changes will reflect everywhere it means even in obj the rollNo will be reassigned to 44 since it is a shallow copy that we are creating here


//DEEP COPY

const deep = {
    car:"TATA",
    details:{
        color:"red",
        number:NaN,
        status:null,
        tyres:undefined,
        steering:true
    }
}

const deep1 = JSON.stringify(deep);
console.log(JSON.parse(deep1));//output: { car: 'TATA',details: { color: 'red', number: null, status: null, steering: true }} -- so when  we do stringify and then parsing the value of NaN converted to null and the keys which holding the undefined value will be deleted beacuse the NaN and undefined are not the valid JSON values


// NaN → null (during JSON.stringify() and after JSON.parse()).
// undefined → key is removed entirely during JSON.stringify().
// null stays as null.
// Other primitive values (strings, numbers, booleans) are unaffected.

// NaN: Although NaN is not a valid number in JSON, it is still treated as a "value" of type number in JavaScript. To maintain consistency and avoid errors, JSON.stringify() replaces NaN with null so that the object can still be safely serialized to JSON without breaking the format.

// undefined: The undefined value, on the other hand, is more problematic because it doesn't represent a valid value or even a concept in the context of JSON. There is no "undefined" type in JSON, so JSON.stringify() removes it entirely from the object to ensure that the resulting JSON stays valid.
