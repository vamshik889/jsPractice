//Right angle triangle

function rightAngle(n) {
  for (let i = 0; i < n; i++) {
    let bag = "";
    for (let j = 0; j < i + 1; j++) {
      bag += "*";
    }
    console.log(bag);
  }
}

rightAngle(7);

//Rectangle

function rectangle(width, height) {
  for (let i = 0; i < height; i++) {
    let bag = "";

    for (let j = 0; j < width; j++) {
      bag += "*";
    }
    console.log(bag);
  }
}

rectangle(4, 6);

//Hollow rectangle
console.log("below is Hollow")
function hollow(width, height) {
  for (let i = 0; i < height; i++) {
    let bag = "";

    for (let j = 0; j < width; j++) {
      if (i === 0 || i === height - 1) {
        bag += "*";
      } else if (j === 0 || j === width - 1) {
        bag += "*";
      } else {
        bag += " ";
      }
    }
    console.log(bag);
  }
}

hollow(4, 6);
