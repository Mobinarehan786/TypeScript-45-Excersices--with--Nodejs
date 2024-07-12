// Making a function that
function makeShirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, "print on shirt"));
}
// calling a function with by default values
makeShirt();
// calling a function with Medium Size and default message
makeShirt("Medium");
// calling a function with small Size and default message
makeShirt("Small", "I Love JavaScript");
