
//Find the number of different data types from the given array

let arr = ["vamshi", "krishma", true, 1,2,3]
let str = 0;
let num = 0;
let bool = 0;

for(let i=0;i<arr.length;i++){

    if(typeof arr[i] === typeof ""){
        str++;
    }
    else if(typeof arr[i] === typeof(4)){
        num++;
    }
    else{
        bool++;
    }
}
console.log(str,num,bool);

//Print the array elements in the below format
// 1 luffy
// 2 zoro

let array1 = ["luffy","zoro","nami","sanji"];

for(let i =0;i<array1.length;i++){
    console.log(i+1 + " " + array1[i]);   // console.log(i+1 , array1[i]);
}