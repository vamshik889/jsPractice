//Convert this array into object with their occurence

let arr = [1,2,3,4,5,4,5,6,8,1,2,9,0,4];

let obj = {};

for(let i =0;i<arr.length;i++){
    if(obj[arr[i]] === undefined){
        obj[arr[i]] =1;
    }
    else{
        obj[arr[i]]++;
    }

}
console.log(obj);