const prompt = require('prompt-sync')({sigint: true}); //this line is used for setting up packages

let firstName2 = prompt("What is your name? ");
console.log(firstName2);

let bikeAge = prompt("How old were you when you learned to ride a bike? ");
bikeAge = Number(bikeAge);
console.log(typeof(bikeAge));

//const widthOfSquare = 10; // thisIsCamelCase
// const pi = 3.14;
// console.log(pi)
// let is a block-scoped variable

// this is how you print to your console/terminal

// let a = 5;
// console.log(5)

// console.log(a)

// strings can be defined three ways:

// "hello world"
// 'hello world'
// `hello world`

// let firstName = "Katie"

// console.log(firstName)

// data types:  strings, numbers (integers, real numbers), and booleans

// let b = 5;
// let c = 9;

// let answer = b + c;

// console.log("the answer is ",answer)

// console.log(`the answer is ${answer}`)

//let lastName = "Toney"

//console.log(`Hello, my last name is ${lastName}`)

//let city = "Atlanta"
//let age = 36

//console.log(`I live in ${city} and I am ${age} years old`)

//let num1 = 3
//let num2 = 2

//?let sum = num1 + num2

//?console.log(`the sum of ${num1} and ${num2} is ${sum} where 'num1' and 'num2' are variables containing numbers, and 'sum' is their sum.`)

//?the best way to put spaces in a long block of text is to surround the text with backticks, because it will print the spaces/paragraphs exactly as you type them.

//?"casting" is converting one datatype to another datatype

//let a = 3
//let b = "3"

//let sum = a + b

//let c = parseInt(b)

//let sum2 = a + c

//console.log(typeof(b))

//console.log(object);

// let b = 3

// let b_num = Number(b)

// console.log(b_num)

// console.log(typeof(b_num));

// let b_num2 = Number("a") //error NaN = not a number

//? casting from integer to string

// let some_int = 5;

// let some_int_string = some_int.toString()



// console.log(some_int_string);
// console.log(typeof(some_int_string));

//! Math with JS
//! PEMDAS

// let x = 3
// let y = 44

// console.log(x + y); addition
// console.log(x - y); subtraction
// console.log(x / y); division
// console.log(x * y); multiplication
// console.log(x % y); modulus (get remainder)

// let total = x * (9 + 5) / y -- 3 * 14 / 44

//let modulus = x % y

// let x = -89;

// let result = Math.abs(x);

// console.log(result);

// let e = 2.72

// result = Math.round(e)
// result = Math.floor(e)

// console.log(result);

// result = Math.pow(2,5);

// console.log(result);

// let ifValid = true;

// console.log(typeof(ifValid));