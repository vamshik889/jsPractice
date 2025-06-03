//reverse an array

const array = [1,2,3,4,5,"king"];

const rev = (arr)=>{

    let first = 0
    let last = arr.length-1;

    while(first<last){
        
        let temp = arr[last];
        arr[last] = arr[first];
        arr[first] = temp;

        first=first+1;
        last = last-1

    }
    return arr;

}

const res = rev(array);
console.log(res)


//reverse 

let arr = [1,2,3,4,5]

function revArray(arr){

    let first = 0;
    let last = arr.length-1

    while (first<last){
        let temp = arr[last]
        arr[last] = arr[first]
        arr[first] = temp;
        first+=1
        last-=1
    }
    return arr;
}

let res1 = revArray(arr);
console.log(res1)