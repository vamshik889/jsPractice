{
    let a = 10;
}
//console.log(a); //ReferenceError: a is not defined

function hello(){
    var name = "vamshi";
    console.log(`hello ${name}`);

}
hello();
console.log(name); //output:ReferenceError: name is not defined - as var is function scoped we cannot call it out side of function

{
    var ab = 15;
}
console.log(ab);  //15 

