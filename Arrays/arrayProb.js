//Count of words whose character starts with letter "g"

let arr = ["goku", "gohan", "gon", "luffy", "google", "oogle", "name", "sanji"];

let countOfwords = 0;

for(let i =0;i<arr.length;i++){
    if(arr[i][0]==="g"){
       countOfwords+= arr[i].length;

    }
}
console.log(countOfwords);


//replace the string values with following and print a new String as gohan
//input : "go%.a$."

let str = "go%.a$.";
let newStr ="";

for(let i =0;i<str.length;i++){
    if(str[i]=== "%"){
        newStr += "h";
    }
    else if(str[i] === "."){
        

    }
    else if(str[i]==="$"){
        newStr += "n";
    }
    else{
        newStr+=str[i];
    }
}
console.log(newStr);


//

let stri = "aabbcc";
let a = 0, b = 0, c =0;
for(let i =0;i<stri.length;i++){
    if(stri[i] === "a"){
        a++;
    }
    else if(stri[i] === "b"){
        b++;
    }
    else if(stri[i] === "c"){
        c++;
    }
}
if(a===b && b===c){
    console.log("Equal")
}
else{
    console.log(`Not equal ${a} ${b} ${c}`);
}
