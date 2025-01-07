class person{
  constructor(name,age =10){
    this.age = age;
    this.name = name;
  }
  greet(){
    console.log("Good morning "+this.name + "! and your age is "+this.age );
  }

}
let person1 = new person("vamshi");
person1.greet();