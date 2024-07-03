
//nested object

let school = {
    name:"NHS",
    class:{
        studentsCount:33,
        names:{
            name1:"Vamshi",
            name2:"jag",
            name3:"Sriram",
            age:{
                vamshi:24,
                jag:25,
                sriram:26

            }
        }

    }


}

//Access of object properties

console.log(school.class.names.age.jag);  //age of jag
console.log(school.class.names.name1)   //print name1

console.log(school["class"].names.age["sriram"]) //age of sriram using dot notation and square notation

console.log(school["class"]["names"]["age"]["sriram"])   //age of sriram using square notation


//delete property of object using delete keyword

console.log(school.class.names.name1); //vamshi

delete school.class.names.name1;

console.log(school.class.names.name1); //undefined - as the property is deleted and if we trying to access the property which doesnot exist it will give undefined

