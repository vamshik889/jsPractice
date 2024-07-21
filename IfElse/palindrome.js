let str = "naman";
let reversedStr ="";
for(let i =str.length-1;i>=0;i--){
reversedStr += str[i];
}
if(str === reversedStr){
    console.log(`Given string is Palindrome : ${str}`);
}
else{
    console.log("String is not Palindrome");
}