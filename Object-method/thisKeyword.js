let object = {
    name : "vamshi",
    age : 24,
    print : function(){
     console.log(this.name);
     console.log(this.age);
    }
}

object.print();

//

let rectangle = {
    length : 3,
    width : 2,
    area : function(){
        return this.length*this.width;
    },
    perimeter : function(){
        return 2*(this.length+this.width);
    }  
}

console.log("Area of rectangle is :",rectangle.area(), "and ", "Perimeter of rectangle is :",rectangle.perimeter());


//Print the array elements from the object using a method

let object1 = {
    array : ["vamshi","krishna","domala"],
    print : function(){
        for(let i=0;i<this.array.length;i++){
            console.log(this.array[i]);
        }
    }
}

object1.print();