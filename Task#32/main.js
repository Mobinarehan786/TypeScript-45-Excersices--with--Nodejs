// Array of Current Users
var currentUsers = ["Ali", "Amir", "Ana", "Arfa", "Arij"];
// Array of new users Name
var newUsers = ["Eram", "Amir", "Ana", "Rehan", "Mobin"];
// Loop through new_users to check for username avaibility
newUsers.forEach(function (new_one_user) {
    var our_condition = currentUsers.some(function (current_one_user) { return current_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, "is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, "is already available!"));
    }
});
