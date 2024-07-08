function checkEvenOrOdd(num){
    if(num%2 === 0){
        console.log("Number is even : ",num)
    }
    else{
        console.log("Numebr is odd : ",num)
    }
}

checkEvenOrOdd(11);

//print the even and odd numbers from 1 to 10

for(let i =1;i<=10;i++){
    checkEvenOrOdd(i);
}


//check if a number is prime or not

let count = 0;

function primeOrNot(num){

    for(let i= 1;i<=num;i++){
        if(num%i === 0){
            count++;
        }
    }
    (count >2 )?console.log("Not a prime ",num): console.log(num, "is a prime number");  //Ternary operator 
}

primeOrNot(7);


