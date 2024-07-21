let str = "naman";

function palindrome(str){
    let res = str.split("").reverse().join("");
    return res === str;
}
let res = palindrome("naman");
console.log(res);
