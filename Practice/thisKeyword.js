let person = {

    "firstName" : "Vamshi",
    "lastName" : "krishna",
    "getFullName" : function(){
        return this.firstName + " " + this.lastName;
    }
}

let fullName = person.getFullName();
console.log(fullName);