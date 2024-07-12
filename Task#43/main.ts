// Define the functions to show magicians name
function showMagician(magicians: string[]) {
    magicians.forEach(name => console.log(name));
   
  }function makeGreat(magicians: string[]) {
   return magicians.map(name => `The Great ${name}`);
  }


  // Define an arraycontaining magicians name
  let magiciansName =["harry potter","mobina","Hamza"]
//   Making a copy of originl array through the.slice(function)
let copymagiciansName = magiciansName.slice()

// Modify the copied array to include "Te Great" with their names
 let copygreatmagiciansName =makeGreat(copymagiciansName)
//  show both arrays original and copies

//  Original
console.log("original Array");

showMagician(magiciansName)

// copied
console.log(copygreatmagiciansName);

showMagician(copygreatmagiciansName) //