const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  const res = users.reduce((acc,item)=>{
    acc[item.id] = item.name
    return acc
  },{})
  console.log(res)