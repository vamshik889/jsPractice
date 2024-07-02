
//Array is an object in Javascript 

let arr = ["vamshi",123,'krishna'];  //array 
console.log(arr.length);  //length of array
console.log(arr[2]);  //print a specific index value from array

//print all values from an array

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let arr2 = ["bmw", "maruti"]

arr.push("hyd",1,"tcs");  //to add some values into an array at the end
console.log(arr);

arr.pop();    //method to remove the last value from an array

console.log(arr); 

arr[2]  = "TATA"; //reassigning the value of an array using index

console.log(arr); 

console.log(1); 
console.log(Object.keys(arr));

















