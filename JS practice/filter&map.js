const filterAndMap = (array) => {
  if (array.length < 1) {
    return -1;
  }
  else{
    const odd = array.filter((ele) => ele % 2 !== 0);
    const squareOfNums = odd.map((ele) => ele * ele);
  
    return squareOfNums;

  }

};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = []

const res = filterAndMap(arr2);
console.log(res)
