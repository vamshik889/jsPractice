

//Strings are immutable, once declared we cannot modify like reassign with new values 

//1)statement - change the F character to J in the given string

let str = "FLMFLM";
let newStr= "";
for (i=0;i<str.length;i++){
    if(str[i]==="F"){
        newStr = newStr+"J";  
    }
    else{
        newStr = newStr+str[i];
    }

}
console.log(newStr);


//2)Find howmany words are there in a sentence

let sentence = "Hi, good morning! welcome to Hyd";
let spaceCount = 0;


for(let j = 0; j<sentence.length;j++){

    if(sentence[j] == " "){
        spaceCount+=1;
    }

}
let wordscount = spaceCount+1;
console.log(wordscount);


//3) given an array - count the total number of letters

let arr1 = ["vamshi", "krishna", "Domala"]
let countOfLetters = 0;

for(let i = 0; i<arr1.length ; i++){
    // for(let j = 0;j<arr1[i].length;j++ ){

    // }

    countOfLetters+=arr1[i].length;
}
console.log(countOfLetters);