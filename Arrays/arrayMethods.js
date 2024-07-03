let a = [10,20,"hello",{}]  // {} is an empty object here

a.push(33,55, "vamshi"); //adds elements to the last

console.log(a);

a.pop()  //removes an element from last
console.log(a);

a.shift() //removes the first element 
console.log(a);

a.unshift("FLM", "TATA")  //adds elements to the first
console.log(a);