
//print each character from string

let str = "vamshi";
for (let i =0;i<str.length;i++){
    console.log(str[i]);
}

//print each character from string in reverse order

for (let j = str.length-1;j>=0;j--){
    console.log(str[j]);
}

//characters at odd position

for (let k =0;k<str.length;k++){

    if(k%2 !== 0){
        console.log(str[k]);
    }
    
}

//Check vowel is present in string

//1)Using for loop

let vowel = ["a","e","i","o","u"];

let str1 = "vamshi krishna";

let vowelCount = 0;

for(let x =0 ;x<str1.length;x++){          //using if logic 
    for(let y =0;y<vowel.length;y++){      // for(let y =0;y<vowel.length;y++){ 
        if(str1[x]===vowel[y]){             //   if(vowel[i] === "a"||vowel[i] === "e"vowel[i] === "i"vowel[i] === "o"vowel[i] === "u"){
            vowelCount++;                   //         vowelCount++;
        }                                   //          }
    }                                       //  }

}
console.log(vowelCount);

//2)Using for...of loops      

                                //for (let element of iterable) {
                                // Code to execute for each element

                                //element: The variable that will be assigned each successive value of the iterable.
                                //iterable: An iterable object to iterate over (such as an array, string, map, or set). 

let vowelNum = 0;
for(let v of str1){
    if(vowel.includes(v)){
        vowelNum++;
    }
}
console.log(`vowelNumbers are ${vowelNum}`);  //Template Literals (`) - will use incase of multi line strings and working with variables in an expression
