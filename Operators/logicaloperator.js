let marks = 80;
let social = 70,
  maths = 80,
  english = 60;

//AND operator

if (social >= marks && maths >= marks && english >= marks) {
  console.log("Ok");
} else {
  console.log("not ok");
}

//OR operator

if (social >= marks || maths >= marks || english >= marks) {
  console.log("Ok");
} else {
  console.log("not ok");
}

//NOT operator

console.log(!(2 === 3 && 3 === 3));
