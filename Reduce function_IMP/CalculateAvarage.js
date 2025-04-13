const students = [
    { name: "A", score: 80 },
    { name: "B", score: 70 },
    { name: "C", score: 90 },
  ];

  const res = students.reduce((acc,item)=>{
    acc+=item.score;
    return acc
  },0)

  console.log(res/students.length)