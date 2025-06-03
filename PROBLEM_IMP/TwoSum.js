//two sum
let target =  3
let array =  [2,7,1,11,15]

function indices(arr,target){
    const map = new Map();

    for(let i=0;i<arr.length;i++){
        let val = target-arr[i];
       if( map.has(val)){
        let map_index = map.get(val);
        return [map_index,i]
       }
       else{
        map.set(arr[i],i)
       }
    }
    
}

const res = indices(array,target);
console.log(res)