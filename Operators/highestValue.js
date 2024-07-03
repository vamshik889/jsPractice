let arr =[10,20,30,50,999,0]

let highest = -Infinity;
let lowest = +Infinity;

for(let i =0; i<arr.length; i++){
    if(highest<arr[i]){
        highest = arr[i];    }

    if(lowest>arr[i]){
        lowest = arr[i]
    }
}
console.log(`highest value is  : ${highest} and lowest value is : ${lowest}`);

