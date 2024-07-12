var guestList = ["Eram", "Rehan", "Mobina"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi a skti");
guestList.splice(0, 1, "Ahmed");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, " would you like to Dinner with me")); });
