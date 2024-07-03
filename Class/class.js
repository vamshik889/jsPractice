class person{
  constructor(name,age){
    this.age = age;
    this.name = name;
  }
  greet(){
    console.log("Good morning "+this.name + "! and your age is "+this.age );
  }
}
let person1 = new person("vamshi", 25);
person1.greet();