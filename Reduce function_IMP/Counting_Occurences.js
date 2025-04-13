const tags = ["js", "react", "js", "node", "react", "js"];

const res = tags.reduce((acc, item) => {
  if (!acc[item]) {   //check if the acc obj has the key if not set the occurence to one and later increase it
    acc[item] = 1;
  } else {
    acc[item] += 1;
  }
  return acc
}, {});

console.log(res);
