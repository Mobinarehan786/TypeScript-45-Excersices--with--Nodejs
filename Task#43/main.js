// Define the functions to show magicians name
function showMagician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function makeGreat(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an arraycontaining magicians name
var magiciansName = ["harry potter", "mobina", "Hamza"];
//   Making a copy of originl array through the.slice(function)
var copymagiciansName = magiciansName.slice();
// Modify the copied array to include "Te Great" with their names
var copygreatmagiciansName = makeGreat(copymagiciansName);
//  show both arrays original and copies
//  Original
console.log("original Array");
showMagician(magiciansName);
// copied
console.log(copygreatmagiciansName);
showMagician(copygreatmagiciansName); //
