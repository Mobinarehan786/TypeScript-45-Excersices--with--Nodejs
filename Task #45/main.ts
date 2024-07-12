

// Define a function to create a car object with optional options
function createCar(maufacturer, model,...options) {
    // 
// }Initialize a car object with manfacture and model

let car = {maufacturer: maufacturer,
     model: model};
    //  Add additional options to the car object
    options.forEach(option=> {
        let [key, value] = option.split(":")
        car[key.trim()] = value.trim();
    });   
    return car;}

    // call the function to create a car object
    let my_car =createCar ("Toyota","Corrolla","color:green","Sunroof:True","year:2009",)
    console.log(my_car);
