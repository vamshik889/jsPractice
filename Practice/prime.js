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



//Rectangle pattern

// for(let hor =1 ;hor <=5;hor++){
// let bag = "";

// for(ver = 1;ver<=5;ver++){

//     if(hor ==1 || hor ==5){
//         bag+="*";
//     }
//     else if(ver == 1 || ver ==5){
//         bag+="*";
//     }
//     else{
//         bag+=" ";
// }
// }
// console.log(bag);
// }