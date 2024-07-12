// Define the functions to show magicians name
function showMagician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function makeGreat(magicians) {
    return magicians.map(function (name) { return "The Great".concat(name); });
}
// Define an arraycontaining magicians name
var magiciansName = ["harry potter", "mobina", "Hamza"];
// call make great function to modify the magicians names
var greatMagicians = makeGreat(magiciansName);
//  call showMagicians  that shows modified list of magicians
showMagician(greatMagicians);
