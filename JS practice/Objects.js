const obj = {
    name:"vamshi",
    age:25,
    schoolDetails:{
        schoolName:"NHS",
        village:"GKP",
        getSchoolInfo:()=>{
            return this.schoolName+" "+this.village;
        }
    }
}

console.log(obj.schoolDetails.getSchoolInfo())
