let str = "nature";

let vowels = ["a","e","i","o","u"];
let notpresent = [];

let obj = {};

for(let i =0;i<vowels.length;i++){
    obj[vowels[i]] = 0;
}
console.log(obj)

for(let j in obj){
    for(k = 0;k<str.length;k++){
        if(j === str[k]){
            obj[j]++;
        }
    }
}
console.log(obj);

for(let x in obj){
    if(obj[x] === 0){
        notpresent.push(x);
    }
}
console.log(notpresent)