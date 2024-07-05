//Print unique elements from a string using Objects

let str = "vamshi krishna";
let obj ={};
let uniqueChars = [];

for(let i=0;i<str.length;i++){

    if(obj[str[i]] == undefined){
        obj[str[i]] = 1;
    }
    else{
        obj[str[i]]++;
    }

}
console.log(obj);

for(let j in obj){
    if(obj[j]==1){
     uniqueChars.push(j);
    }
}
console.log(uniqueChars);