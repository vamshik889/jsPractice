//Convert the integer array to string
let arr = [1,2,3,4,5,6]

//Method1 ) 
let res = arr.toString();
console.log(res); //1,2,3,4,5,6
console.log(typeof(res))  //string


//Method 2) join() //join  - The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const elements = ['Fire', 'Air', 'Water'];  //syntax : join(separator)
let res2 = elements.join(" "); //output : Fire Air Water
console.log(res2);

