let arr = [1, 2, 3, 4, 5, 5, 6, 6, "vamshi", "krishna", "hi", "hi", "Mark", "Mark"];

// Find and print the unique elements and if that is number give the sum by using objects
let obj = {};

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
        obj[arr[i]] = 1;
    } else {
        obj[arr[i]]++;
    }
}
console.log(obj);

let numArr = [];
let strArr = [];
let sumOfnumArr = 0;

for (let j in obj) {
    if (obj[j] === 1) {
        if (typeof(Number(j)) === 'number' && !isNaN(Number(j))) {
            sumOfnumArr += Number(j);
            numArr.push(Number(j));
        } else {
            strArr.push(j);
        }
    }
}
console.log(numArr, strArr, `and sum is: ${sumOfnumArr}`);
