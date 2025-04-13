const skills = ["React", "Node", "React", "CSS", "Node"];

const res = skills.reduce((acc,cur)=>{

    if(!acc.includes(cur)){
        acc.push(cur)
    }
return acc
},[])

console.log(res)