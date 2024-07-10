let array = ["vamshi", "krishna", "domala"];


//create an object method to return a new array with reversed names

let obj = {
     
 reversedArray : function(array){
    let newArr = [];
    for(let j =0;j<array.length;j++){
      let element ="";
       for(let i =array[j].length-1;i>=0;i--){
           element+=array[j][i];
     }
     newArr.push(element);
}
return newArr;
 }
    
}

let result = obj.reversedArray(array);
console.log(result);
