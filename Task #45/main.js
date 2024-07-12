// Define a function to create a car object with optional options
function createCar(maufacturer, model) {
    // 
    // }Initialize a car object with manfacture and model
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { maufacturer: maufacturer,
        model: model };
    //  Add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
var my_car = createCar("Toyota", "Corrolla", "color:green", "Sunroof:True", "year:2009");
console.log(my_car);
