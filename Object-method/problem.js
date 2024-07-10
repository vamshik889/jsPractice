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
        
    }

}
details.addStudent("vamshi",23,45,66);

console.log(details.data);