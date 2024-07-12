import { log } from "console";

let placeTovisit :string[] =["Paris" , "Newyork","Rome", "Italy", "China"]
// Print in original array

console.log("original Order:",placeTovisit);
//  print your alphabetical order.l

console.log(" Alphabetical order;",placeTovisit .slice().sort());
// array is still in its original order by printing it.

console.log("original Order:",placeTovisit);
// array is still in reverse alphabateical with out changing the order of the.
console.log("reverse  order;",placeTovisit .slice().sort().reverse());

console.log("original Order:",placeTovisit);

console.log("reverse order changed");
placeTovisit.reverse();
console.log(placeTovisit);

console.log("original order"),placeTovisit.sort();
console.log(placeTovisit);


console.log("reverse alphabetical order changed ",placeTovisit.sort().reverse());

console.log(placeTovisit);




