function chunkArray(arr, n) {
  // Your implementation
  let array = [];
 
  for(let i=0;i<arr.length;i+=n){
    array.push(arr.slice(i,i+n))
  }
  return array;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
console.log(chunkArray([1, 2, 3, 4, 5, 6,7], 10));
