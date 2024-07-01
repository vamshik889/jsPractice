let mobile = "iphone";
let color1 = "blue",
  color2 = "white";
let storecolor = "white";
let price = 110000;
let budget = 90000;
let mobileInstore = "iphone";

if (
  mobileInstore === mobile &&
  (storecolor === color1 || color2) &&
  budget >= price
) {
  console.log("You can buy iphone");
} else {
  console.log("you cannot buy iphone");
}
