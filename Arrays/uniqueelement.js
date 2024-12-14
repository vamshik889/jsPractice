let array = [1,2,2,3,4,5,5,6,7,8,8,9,9];

function unique(array){
  let arr = [];

  let countmap = new Map();
  for(let num of array){
    countmap.set(num,(countmap.get(num) || 0) +1);
  }
  for(let [key,val] of countmap){
    if(val===1){
      arr.push(key)
    }
  }
  
  return arr;
}

let res = unique(array);
console.log(res)