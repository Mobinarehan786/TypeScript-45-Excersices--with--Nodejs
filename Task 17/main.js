// Creating a guest list array
var guestList = ["Ali", "hamza", "Eram", "Nida"];
// Making variables for those whi cant come.
var dontcome = guestList[0];
//Print the name of guest for those whi cant come.
console.log(dontcome, "Nai aa skta");
//  Add or remove values from guest list
guestList.splice(0, 1, "Reema");
//  Message Print for bigger table
console.log("Good news ! We have found a bigger table for dinner");
// Adding a new value at starting index of array
guestList.unshift("saad");
// adding a new value at index of array
guestList.push("Raza");
// get a midddle value at index of array
var middleIndex = Math.floor(guestList.length / 2);
// adding a midddle value at index of array
guestList.splice(middleIndex, 0, "Rehan");
console.log("Updated list of our guests");
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
// inform that only two guests can be invited for dinner
console.log("unfortunately , the new dinner table wont arrive on time ,so I can only invite two guests to dinner with me");
// using while loop to remove guests from the array untill only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry,".concat(removedGuest, " I cant invite you to dinner"));
}
// sending a invitationsto the last guest on the list
console.log("invitation to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ",you are still invited to dinner")); });
guestList.pop();
guestList.pop();
// removing last two gues from list
guestList.pop();
guestList.pop();
console.log("Empty List", guestList);
