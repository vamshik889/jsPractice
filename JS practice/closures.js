// The `counter` function acts as a closure, encapsulating the `count` variable.
function counter(count) {
    // The returned function forms a closure over `count`, keeping it accessible.
    return function () {
      return count++; // Post-increment: Returns `count` first, then increments it.
    };
  }
  
  // Creating an instance of the `counter` function.
  // `count` is set to 1, and the returned function retains access to `count` due to closure.
  const count = counter(1);
  
  console.log(count()); // Output: 1 (Returns `count`, then `count` becomes 2)
  console.log(count()); // Output: 2 (Returns `count`, then `count` becomes 3)
  console.log(count()); // Output: 3 (Returns `count`, then `count` becomes 4)
  console.log(count()); // Output: 4 (Returns `count`, then `count` becomes 5)
  
  /*
  ------------------------------------------------------------------
  🔹 **Understanding Closure:**
  ------------------------------------------------------------------
  1️⃣ **What is a Closure?**
     - A closure is a function that "remembers" the variables from its outer scope 
       even after the outer function has finished executing.
     - In this case, the inner function inside `counter` still remembers the `count`
       variable even after `counter(1)` is called.
  
  2️⃣ **Why Does `count` Persist Across Calls?**
     - Normally, local variables disappear once a function execution ends.
     - However, since the returned function **closes over `count`**, it 
       keeps a reference to `count` from its parent scope.
     - The `count` variable remains in memory as long as the function is referenced.
  
  3️⃣ **How Does the Counter Work?**
     - Each time `count()` is called, it accesses the `count` variable inside the closure.
     - `count++` (post-increment) returns the **current value** and then increments it.
     - This means every call to `count()` updates `count`, ensuring **persistent state**.
  
  ------------------------------------------------------------------
  🔹 **Key Takeaways:**
  ------------------------------------------------------------------
  ✔️ **Closures allow functions to "remember" variables from their parent scope.**  
  ✔️ **The inner function retains `count` even after `counter(1)` finishes.**  
  ✔️ **Each call to `count()` updates the stored `count`, maintaining state.**  
  ✔️ **If we called `counter(1)` again, it would create a new independent counter.**  
  ------------------------------------------------------------------
  */
  
  function closure(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
  }

  const closures = closure(3)(5)(4);
  console.log(closures);