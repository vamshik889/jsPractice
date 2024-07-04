for(let hor =1;hor<=10;hor++){
   let bag = "";
   for(ver = 1; ver<=10; ver++){
     if(hor ==1||hor == 10){
        bag = bag+ "*";
     }
     else if (ver ==1 || ver ==10 ){
        bag = bag+"*";
     }
    else{
        bag = bag+" ";
    }

   }
console.log(bag);

}