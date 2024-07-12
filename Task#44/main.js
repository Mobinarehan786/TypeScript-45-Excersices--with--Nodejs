function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\Enjoy Sandwitch");
}
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Tomato", "cucumber");
makeSandwich("ketch up", "Chilli");
makeSandwich("chees", "Paneer");
