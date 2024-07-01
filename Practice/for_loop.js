let sum = 0;
for(let i=1;i<=10;i++){
    if(i%2==0 && i%5==0){
        sum+=i;

    }
   
}
console.log(sum);

//stop the iteration if the i == 4 from 1 to 10

for(let i=0;i<=10;i++){
    if(i==4){
        break;
    }
    console.log(i);
}


//skip the iteration if the i == 4 from 1 to 10

for(let i=0;i<=10;i++){
    if(i==4){
        continue;
    }
    console.log(i);
}
