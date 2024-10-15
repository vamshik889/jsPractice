//Array destructuring

let arr = [1,2,3,4]

let [a,b,c,d] = arr;
console.log(a,b,c,d)


//Object destructuring


let obj = {
    name:"vamshi",
    age:24,
    num:970588,
    education:{
        college:"kits",
        branch:"civil",
        roll:121
    }
}

let {name,age,education:{college}} = obj;   //education:{college} destructuring the nested object

console.log(name,age,college)


let arr1 = [1,2,3,4,5,6]

let sep = (array)=>{
    let even = [];
    let odd = [];
    array.forEach((element)=>{
        element%2===0?even.push(element):odd.push(element);

    });
    return {even,odd};

};

let res = sep(arr1);
console.log(res);