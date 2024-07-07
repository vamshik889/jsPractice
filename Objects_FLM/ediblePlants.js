let edible = "xY";
let plants = "AYxxXY";

let obj = {};
for(let i =0;i<edible.length;i++){
    obj[edible[i]] = 0;
}
console.log(obj);
let sum = 0;

for(let j in obj){

    for(let k =0;k<plants.length;k++){
        if(j === plants[k] ){
            obj[j]++;
        }
    }
    sum = sum+obj[j];
}
console.log(sum)
