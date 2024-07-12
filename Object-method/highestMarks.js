//create a object with the follwing functionality.

//1. ability to add 3 students details and their marks in 3 subject.
//2. method to find student with the least total.
//3. method to find the highest total.
[
    {name:"mahesh",english:23,maths:12,physic:34}, //0
    {name:"goku",english:33,maths:22,physic:44}, //1
    {name:"gohan", english:45,maths:52,physic:94} //2
     ]
    
    let details={
      data:[],
      addStudent: function(name,english,maths,physic){
        let object={};
        object.name= name;
        object.english= english;
        object.maths= maths;
        object.physic= physic;
    
        this.data.push(object);
      },
      leastTotal: function(){
        let lowerScore= +Infinity
        let lowStudent; //empty
    
      for(let i=0;i<this.data.length;i++){
        let total= this.data[i].english + this.data[i].maths + this.data[i].physic;
    
        if(lowerScore > total){
          lowerScore = total;
          lowStudent= this.data[i].name;
        }
      }
      console.log("lowStudent",lowStudent);
      },
       higestTotal: function(){
        let highstudent ;
        let highest = -Infinity;

        for(let j=0;j<this.data.length;j++){

           let highestTotal = this.data[j].english + this.data[j].maths + this.data[j].physic;

           if(highestTotal>highest){
            highest = highestTotal;
            highstudent = this.data[j].name;

           }
        }
        console.log("highest total is : ",highest, "and high student is :",highstudent );
       }
    }
    details.addStudent("mahesh",23,12,34);
    details.addStudent("goku",33,22,44);
    details.addStudent("gohan",45,52,94);
    
    // console.log(details.data);/
    details.leastTotal();
    details.higestTotal();
    