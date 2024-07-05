//print the elements whose occurence is more than or equals to 2

let arr = [1,2,3,4,5,6,1,2,3,4,7,8,9,10];

let obj ={};
let sum = 0;

for(let i =0;i<arr.length;i++){

    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    }
    else{
        obj[arr[i]]++ ;
    }
}
console.log(obj);

for(let j in obj){
    if(obj[j]>=2){
        console.log(j);
        sum = sum+Number(j);   //converting string to number using Number()
    }
}
console.log(sum);