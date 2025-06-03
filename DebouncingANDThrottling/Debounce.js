function debounce(func,delay){
let timer;
return function(...args){

    clearTimeout(timer);
    timer = setTimeout(()=>{
        func.apply(this,args) // ensure context and args are preserved
    },delay)
}
}

const logFunc = ()=>{
    console.log("Hi")
}

const debounceLog  = debounce(logFunc,3000)
const input = document.getElementById("input");
input.addEventListener("input",debounceLog)




// 🔍 How It Works
// debounce(func, delay) returns a debounced version of func.

// Every time the returned function is called:

// It clears the previous timer (clearTimeout(timer)),

// And sets a new timer (setTimeout(...)).

// Only if no call happens again within delay, func actually runs.

// 💡 Why apply(this, args)?
// apply() ensures that:

// the original this context is preserved,

// arguments (args) are passed correctly.