let details = {
    data : [],
    addStudent : function(name,english,maths,physics){
        let obj = {};
        obj.name = name;
        obj.english = english;
        obj.maths = maths;
        obj.physics = physics;

        this.data.push(obj);
    },
    leastTotal : function(){ 
        let lowestmarks = +Infinity;
        let lowerStud ;
        for(let i =0;i<this.data.length;i++) {
            let total = this.data[i].english+this.data[i].maths+this.data[i].physics;
            if(lowestmarks>total){
                lowestmarks = total;
                lowerStud = this.data[i].name;
            }
        } 
        console.log("lowest student is ",lowerStud , "lower marks",lowestmarks)
    }

}
details.addStudent("vamshi",23,45,66);
details.addStudent("krishna",12,5,26);
details.addStudent("domala",66,45,66);     //to access the name of an object from data Array : console.log(details.data[0].name);


details.leastTotal();

