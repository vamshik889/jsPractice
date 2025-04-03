// Find a pivot in an array such that sum of the left array is equals to the right array
// input : [1,2,2,5,3,2]
// output: 5

//Approach 1) : T.c  - O(n^2)
function pivot(arr) {
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (j = i - 1; j >= 0; j--) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arrLen; k++) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return arr[i];
    }
  }
  return -1;
}
const res = pivot([1, 2, 3, 0, 3]);
console.log(res);

//Approach2: Prefix sum

function pivotNum(arr) {
  let total = arr.reduce((acc, ele) => acc + ele, 0);

  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightSum = total - leftSum - arr[i];
    if (leftSum === rightSum) {
      return arr[i];
    }
    leftSum += arr[i];
  }
  return -1;
}

const res1 = pivotNum([1, 6, 2, 3, 4, 5]);
console.log(res1);
