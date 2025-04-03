class car {
    constructor(color,brand,year,name){
        this.name = name;
        this.color = color;
        this.year = year;
        this.brand = brand;

    }
    getInfo(){
        console.log(`car details : name:${this.name}, color: ${this.color} , year ${this.year} and brand ${this.brand}`)
    }
    get price(){

    }
    set
}
const car1 = new car("red","TATA","2023","PUNCH EV");
car1.getInfo()