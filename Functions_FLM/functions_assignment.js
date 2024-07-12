//1)sum of numbers

function sum(a,b){
    return a+b;
}
let resu = sum(4,5);
console.log(resu);

//2)Absolute difference of two numbers

function difference(x,y){  //function to find the difference
    return x-y;
}
let diff = difference(4,9);

function absoluteValue(diff){  //function to find the absolute value
if(diff<0){
    diff*=-1;
}
return diff;
}

let absValue = absoluteValue(diff);
console.log(absValue);

//3)Find odd and even numbers from 0 to n

function isOdd(n){
    
   if(n%2 == 0){
            return true;
        }
        else{
            return false;
        }
    }

for(let j = 0;j<=7;j++){
    let res = isOdd(j);
    if(res === true){
        console.log("number is even : ",j)
    }
    else{
        console.log("number is odd : ",j);
    }
}


//4)Avarage of elemets of an Array

function sum(arr){
    let sum = 0;
    if(arr.length == 0){
      return 0;
    }
    else{
        
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
            }
            return sum;
    }

}
let array = [1,2,3,4,6,8];
let res = sum(array);
console.log(res);

let avarage = res/array.length ;

console.log(avarage);


//5)Convert a character, word or Array to lowercase 

function toLower(ch){

    if(typeof ch === "string"){  //checking if the given input is character or word then it will be typeof string and we can return lowercase directly
        return ch.toLowerCase();
    }
    else if(typeof ch == "object"){ //checking if the given is array or not , the type of array is object so by using this we can convert the each element from an array to lowercase
        let lowerCaseArr =[];
        for(i =0;i<ch.length;i++){
            let res = ch[i].toLowerCase();
            lowerCaseArr.push(res);
        }
        return lowerCaseArr;

    }
}
console.log(toLower("LOVE"));

let Arr =["VAMSHI", "KRISHNA","DOMALA"];

let result1 = toLower(Arr);
console.log(result1);

//6) Reverse the string multiple functions : input : Test , output : tseT

function stringReverse(str){  //step1) reversing the string and pushing each elements to an array
    let emp =[];
    for(i=str.length-1;i>=0;i--){
       emp.push(str[i]);
    }
    return emp;
}

function actualReversed(result2){
    let reversedString = "";
for(let m =0;m<result2.length;m++){
    reversedString+=result2[m];
}
return reversedString;
}
let reversed = stringReverse("Test")

let swappedCase = actualReversed(reversed);

console.log(swappedCase);


//7)Convert an integer array to String

function toString1(arr,n){

    let emp = "";
    for(let y = 0;y<n;y++){
        emp+=arr[y];
    }
    return emp;
}
let arr3 = [1,2,3,4,5];
let n = 5;
let result33 = toString1(arr3,n);

console.log(result33);
