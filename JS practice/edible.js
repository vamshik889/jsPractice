let edible = "xY";
let plants = "AYxxXY";

function ediblePlants(arg1, arg2) {
  const obj = {};
  for (let i = 0; i < edible.length; i++) {
    obj[edible[i]] = 0;
  }
  console.log(obj);
  let sum = 0;

  for (let key in obj) {
    for (let k = 0; k < plants.length; k++) {
      if (key === plants[k]) {
        obj[key] += 1;
      }
    }
    sum += obj[key];
  }
  console.log(sum);
  return sum;
}

const res = ediblePlants(edible, plants);
