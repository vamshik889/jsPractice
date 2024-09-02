//1)write a function to convert  or replace space with - in a word : input :vamshi krishna -> vamshi-krishna

function replaceSpace(str){
    let newStr = "";
    for(let i =0;i<str.length;i++){
        if(str[i] == " "){
            newStr+="-";
        }
        else{
            newStr+=str[i];
        }
        
    }
    return newStr;
}

let string1 = "vamshi krishna";
let res = replaceSpace(string1);
console.log(res);

//2)write a function to convert a string to an array

function strToArry(string1){

    let newArr =[];
    let bag = "";
    for(let j =0;j<string1.length;j++){
        
        if(string1[j] == " "){
            newArr.push(bag);
            bag = "";
        }
        else{
            bag+=string1[j];

        }
    }
    newArr.push(bag);  //AT THE LAST ITERATION we dont have space so the word wont be pushed but the bag variable has the last word so pushing that to array after the end of loop
    return newArr;

}
                                                                                                                                                                                                                            
let string = "vamshi krishna domala";
let arr5 = strToArry(string);
console.log(arr5);


