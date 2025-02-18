const fun = (variable)=>{
    return typeof(variable);

}

const res = fun("vamshi")
const res1 = fun(33);
const res2 = fun({name:"vamshi"});
const res3 = fun(true);
const res4 = fun(NaN)

console.log(res,res1,res2,res3,res4)