//Method:1 

let arr = [1,2,3,4,5,6,1,2,3,4,5,6,7,8,9]

function removeDup(arr){
  let newArr = [];

  for(let i=0;i<arr.length;i++){

    if(newArr.indexOf(arr[i]) == -1){
      newArr.push(arr[i])
    }
  }

  return newArr;
}

let dup = removeDup(arr);
console.log(dup);

//Method : 2) 

let a = [1, 2, 3, 4,6,6,3,2];
console.log([...new Set(a)])  //using set which doesn't have the duplicate values