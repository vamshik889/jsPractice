
//Find the palindromes from given Array

let array = ["mom", "dad", "gohu", "gohan"]


function reverseString(str){
    let emp ="";
    for(let i = str.length-1;i>=0;i--){
        emp+=str[i];
    }
return emp;
}
 
for(let j = 0;j<array.length;j++){

    let result = reverseString(array[j]);

    if(result === array[j]){
        console.log(array[j], "is a palindrome");
    }
    else{
        console.log(array[j], "is not a palindrome");
    }
}

//Printing the reversed strings in a new array by using reverseString() function

    let reversedArray = [];
for(let k = 0;k<array.length;k++){

    let result1 = reverseString(array[k],array[k].length);
    reversedArray.push(result1);

}
console.log(reversedArray);
