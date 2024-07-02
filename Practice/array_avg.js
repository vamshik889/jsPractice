let arr = [1,2,3,4,5,6];
sumOfEven = 0;
countOfeven = 0;

for(let i = 0;i<arr.length;i++){
    if(arr[i] %2==0){
        sumOfEven+=arr[i];
        countOfeven++
    }
}
console.log(sumOfEven/countOfeven);

let arr1 = [1,2,3,4,5,6]  //reverse the array

for (let j = arr1.length - 1;j>=0; j--){
    console.log(arr1[j]);
}


let str = "vamshi krishna";

console.log(str.toUpperCase());