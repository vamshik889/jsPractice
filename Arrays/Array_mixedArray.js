//write a function to separate the array with data types

function mixedArray(arr){
    let numArr =[];
    let stringArr = [];

    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] === "number"){
            numArr.push(arr[i]);
        }
        else if (typeof arr[i] === "string"){
            stringArr.push(arr[i]);
        }

        }
        return{numArr,stringArr};

}

let sepArray = mixedArray(["vamshi",123,234,666,"krishna"]);
console.log(sepArray);