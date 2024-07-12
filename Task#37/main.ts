// Making a function that
function makeShirt (size :string  ="Large",printMessage :string ="I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage}print on shirt`);
    
}
// calling a function with by default values
makeShirt();
// calling a function with Medium Size and default message
makeShirt ("Medium")
// calling a function with small Size and default message
makeShirt ("Small","I Love JavaScript")