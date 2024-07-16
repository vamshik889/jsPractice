let arr = ["jan","march","april"]   //splice method - The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
arr.splice(1,0,"feb")   //syntax : splice(start, deleteCount, item1, item2, /* …, */ itemN)         
console.log(arr)                //[ 'jan', 'feb', 'march', 'april' ]
//explanation: here we are started at index 1 and delete count is 0 so no deletion happens and the item is given as feb so it will be added at index1

//splice method - arr.splice(start,deletecount,item); start is nothing but the index and delete count is number of elements to delete including the start index element and item is nothing but after deletion we will be adding at that index 


/*imp points of splice() method
1)it will modify the existing array
2)to not to modify the existing array we need to use toSpliced() method - it is same as splice() but it wont modify the existing array instead it will create a new copy 

*/


//slice() : The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected 
         // from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

 //Syntax: slice()
    //     slice(start)
//         slice(start, end)        
        // -1 is the last element
        
         const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

         console.log(animals.slice(2));
         // Expected output: Array ["camel", "duck", "elephant"]
         
         console.log(animals.slice(2, 4));   
         // Expected output: Array ["camel", "duck"]  //here end 4th index is not included 
         
         console.log(animals.slice(1, 5));
         // Expected output: Array ["bison", "camel", "duck", "elephant"]
         
         console.log(animals.slice(-2));
         // Expected output: Array ["duck", "elephant"]
         
         console.log(animals.slice(2, -1));  
         // Expected output: Array ["camel", "duck"]
         
         console.log(animals.slice());
         // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

