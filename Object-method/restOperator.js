//rest operator --> if we want to convert arguments into an array

function print(...arr){  //to not to write the multiple parameters in the function we will just use the rest operator which will return the array
    console.log(arr);
    // for(let i = 0;i<arr.length;i++){  //to print the each element we are iterating here
    //     console.log(arr[i]);
    // }
}

print(1,2,3,4,5,6,7,8,9,10); //output is array of all items : [1, 2, 3, 4,  5,6, 7, 8, 9, 10]