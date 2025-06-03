function minDiff(arr){
    let sortedArr = arr.sort((a,b)=>a-b);
    let pairs = []
    let minDiff = Infinity
    for(let i=1;i<sortedArr.length;i++){
        let diff = arr[i]-arr[i-1]
        if(diff<minDiff){
            minDiff = diff
        }
    }
    for(let i=1;i<sortedArr.length;i++){
        let diff = arr[i]-arr[i-1]
        if(diff === minDiff){
            let pair = [arr[i-1],arr[i]]
            pairs.push(pair)
        }
    }
    return pairs;

}

let testArray = [6,4,8,2,10] 
const res = minDiff(testArray);
console.log(res)

//sort the array > find the minimum difference by deducting the adjacent elements>then check the pairs with difference of min difference