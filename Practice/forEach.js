let myArray = [10,20,33, "vamshi",{}];

var myfun = function(item){
    console.log("element items are " + item);
}
myArray.forEach(myfun);  //forEach accepts functions as arguments and iterates over the array

