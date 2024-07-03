let str = "naman";
let reversedStr ="";
for(let i =0;i<str.length;i++){
reversedStr += str[i];
}
if(str === reversedStr){
    console.log(`Given string is Palindrome : ${str}`);
}
else{
    console.log("String is not Palindrome");
}