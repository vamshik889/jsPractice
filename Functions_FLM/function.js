//Function is a block of code which can be reused multiple times.
// {
//     //block of code
// }


//1)function declaration
function openInsta(){
    console.log("Hello !")

}

openInsta(); //calling function

//2)Function with arguments

function greet(name){
    console.log(`Hi ${name} `)  //console.log("Hi ",name)

}
greet("Vamshi")







let x = {
    school : "NHS",
    Fname : "vamshi",
    Lname:"krishna",
    fullName : function(){
        return this.Fname+this.Lname
    }

}

let y = x.fullName();
console.log(y);

