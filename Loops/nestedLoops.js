//Print right angle triangle pattern

for(let i =0;i<5;i++){
    let row = "";

    for(let j=0;j<=i;j++){
        row += "*"    
    };
    console.log(row);   //if we console log in the inner loop it will run many times as the j value we are initializing to zero every time when it enters to inner loop
};

//Print the 3subjects for each day


for(let day = 1; day<=3; day++){
    console.log("Day ", day)

    for(sub = 1; sub<=3; sub++){
        console.log("Sub ",sub);
    };
};

//multiplication table

for(let j = 1;j<=10;j++){
    console.log("Table ",j)

for(let k =1;k<=10;k++){
    console.log(j + "*" + k +" = " + (j*k));
}

}


//Farm seeds 

for(let farm =1;farm<=3;farm++){
     let bag = "";
    console.log("Farm ", farm);

    for(seed = 1; seed<=5; seed++){
        bag +="*";

    }
    console.log(bag);
}