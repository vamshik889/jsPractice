const arr = [0,1,2,3,4];

const res = arr.map((element,index)=>{
    if(index%2!==0){
        return "-"
    }
    else{
        return element
    }
})

console.log(res.join(""))