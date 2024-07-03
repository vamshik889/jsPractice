let character = "d";

let lower = ["a","b","c","d"];
let upper = ["A","B","C","D"];

for(let i =0; i<lower.length;i++){
    if(character === lower[i]){
        console.log(upper[i]);
        break;
    }
}