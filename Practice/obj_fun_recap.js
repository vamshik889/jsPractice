//create an object with functions and call those to get the required output

let school = {
    "name": "NHS",
    "location" : "GKP",
    "distance" : 3,
    "schoolDetails": function(){
        return this.name;
    }, 

    "classes" : {
        "class" : 10,
        "studentsCount": 33,
        "classDetails": function(){
            return this.class + " from " + school.name;
        },
        "students" :{
            "student1":"Maths",
            "student2": "Physics",
            "favSubject": function(){
                return this.student1;
            },

        }
    }

};

let schoolAndClass = school.classes.classDetails();
console.log(schoolAndClass);
