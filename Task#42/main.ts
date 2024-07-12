
// Define the functions to show magicians name
function showMagician(magicians: string[]) {
    magicians.forEach(name => console.log(name));
   
  }function makeGreat(magicians: string[]) {
   return magicians.map(name => `The Great ${name}`);
  }


  // Define an arraycontaining magicians name
  let magiciansName =["harry potter","mobina","Hamza"]
  // call make great function to modify the magicians names
 let greatMagicians=makeGreat(magiciansName);
//  call showMagicians  that shows modified list of magicians

showMagician(greatMagicians);