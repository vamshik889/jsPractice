let students = ["goku", "gohan", "piccalo", "chichi"];

let score = [40,34,32,67]

//convert this above into below format

// [

// {name : "goku", score : 40},
// {name : "gohan", score : 34},
// {name : "piccalo", score : 32},
// {name : "chichi", score : 67}

// ]

//create an empty array , create individual objects > then push each object to empty array and print the array

let empArr = [];

for(let i = 0;i<students.length;i++){
    let obj = {};

    obj["name"] = students[i];
    obj["score"] = score[i];

    empArr.push(obj);
}
console.log(empArr);