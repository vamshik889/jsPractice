//Object will have keys and values
//we cannot have the 2 keys with same name


let obj = {
    name:"NHS",
    students : {
        class1 : 55,
        class2 : 88,
        details : function(){
            return this.class1;
        }
    }

    }
    console.log(obj.students.details());