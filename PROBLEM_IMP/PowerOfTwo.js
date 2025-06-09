function powerOfTwo(num){
    while(num > 1){
        num=num/2
    }
    if(num !==1){
        return false
    }
    return true
}

const res = powerOfTwo(128)
console.log(res)