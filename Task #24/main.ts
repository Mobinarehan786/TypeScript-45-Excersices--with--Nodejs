let apple ="apple";
let uppercaseApple ="APPLE"

let ten =10;
let twenty =20;

let fruits =["apple","banana","orange"]
//  Test for equality and equality with strings

console.log("Is apple is equal to apple");
console.log(apple =="apple");

console.log("Is apple is not equal to apple");
console.log(apple !="apple");

// Tests using lower case of functions
console.log("Is APPLE is equal to apple after converting the lower case")
console.log(uppercaseApple.toLowerCase()=="apple");

console.log("Is APPLE is not equal to apple after converting the lower case")
console.log(uppercaseApple.toLowerCase()!="apple");

// Numerical tests
console.log( "Is ten is equal to twenty");
console.log(ten==twenty);
// Not
console.log( "Is ten is not equal to twenty");
console.log(ten!=twenty);
// Greater than
console.log( "Is ten is greater than 0");
console.log(ten>0);

// Less than
console.log( "Is twenty is less than 10");
console.log(twenty<10);
// Greateror equal to
console.log( "Is ten is greater than or equal to 5?");
console.log(ten>=5);
// Less than or equal to
console.log("twenty is less than or equal to 10");
console.log(twenty<=10);

//Tests using "and" &&
console.log( "twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty!=10 && twenty  >=10);

//Tests using || (or)
console.log( "twenty is greater than 50 or 20 is equal to 20");
console.log(twenty >50 ||20==20);

// Test whether an item is include in an array
console.log("Is orange include in my fruit array")

console.log(fruits.includes("orange"));


// Test whether an item is include in an array
console.log("Is orange not include in my fruits array")

console.log(!fruits.includes("orange"));



