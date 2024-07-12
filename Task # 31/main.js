var usersNames = ["mahad", "Zeeshan", "Ali", "Admin", "Usman"];
usersNames = [];
if (usersNames.length === 0) {
    console.log(" Your Array is empty We need to find some users! ");
}
else {
    // Using ForEach Loop on Array
    usersNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ",would you like to to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ",Thank u for loging again"));
        }
    });
}
