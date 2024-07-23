let name1 = ["tcs","info"];

let name2 = ["virtusa","BT"];

let arr3 = [...name1, ...name2];  //in this line we are joining the name1 and name2 array

console.log(arr3);  //output : [ 'tcs', 'info', 'virtusa', 'BT' ]

for(let item of arr3){
    console.log(`items are ${item}`);    //for of loop1
}