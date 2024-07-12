"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creating an Array
var userNames = ["Ali", "Ahmed", "Rehan", "Admin", "Usama"];
// Using Foreach Loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",would you like to to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",Thank u for loging again"));
    }
});
