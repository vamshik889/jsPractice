const products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" },
  ];

  const groupedByCategory = (arr)=>{

    const ae = arr.reduce((acc,item)=>{  //chacek if the acc nothing but {} here, with the category key , initially it is undefined so make the if to true and assign an empty array and later push the items properties into array 
       if(!acc[item.category]){
        acc[item.category] = []
       }
       acc[item.category].push(item.name)
       return acc
    },{})
    return ae
  }

  const res = groupedByCategory(products)
  console.log(res)