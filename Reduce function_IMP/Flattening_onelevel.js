//It flattens only one level - shallow flattening

const nested = [[1, 2], [3, 4], [5, 6]];

const res = nested.reduce((acc,item)=>{
   return acc.concat(item)
},[])
console.log(res)

//we can use nested.flat(Infinity) //flattens deeply nested also 

//OR

//we can use recursive function