let primeNums = [];
for(let i =1;i<=10;i++){
let count = 0;
    for(let j= 1; j<=i;j++){
        if(i% j== 0){
            count++;
 
        }
    }
    if(count == 2 ){
        primeNums.push(i);
     }
}
console.log("Prime numbers are :", primeNums);