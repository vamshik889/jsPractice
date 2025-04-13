//Recursion approach

function flatArray(arr){

return arr.reduce((acc,cur)=>{
   return Array.isArray(cur)? acc.concat(flatArray(cur)):acc.concat(cur)
    
},[])


}
const deeplyNested = [[1, [2, 3]], [4, [5, [6]]], [7, 8]];

const res = flatArray(deeplyNested);
console.log(res)