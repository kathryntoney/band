//* FUNCTION DECLARATION vs. FUNCTION EXPRESSION

//* a function declaration is a function that is bound to an identifier or name.

// greetWorld()

// function greetWorld() { // interpreter looks for variables and func decs before going through the rest of the script
//     console.log('hello world');
// }

// hoisting allows you to call a function BEFORE it is defined. A declared function can be called before it is declared.

// let size = area(3, 4)
// console.log(size);
// function area(width, height) {
//     return width * height;
// }

//* function declaration is often stored in a variable in order to refer to it.  This allows you to define a function inside an expression, we can use the function keyword.
//* In a function expression, the function name is usually omitted.

// const calculateArea = function (width, height) { // hoisting will not work in this instance
//     console.log(width * height);
//     return width * height;
// }

// calculateArea(3, 4)

//* call functions AFTER they are defined

//* a self-invoking function is invoked/started automatically, without being called.  Like Bootstrap - we don't need to tell it to kick off.
//* You have to add parentheses around the function to indicate that it is a function expression.  
//* Function expressions will execute automatically if 

//? (anonymous function goes here)(arguments for anonymous function)

// (function (num1, num2) {
//     console.log('hello world', num1 + num2);
// })(6, 7)

//* pass by value vs. pass by reference

// let a = 5;
// let b = a;
// a = 3.14;
// console.log(a, b);

// let arrA = [1, 2, 3, 4]
// let arrB = [...arrA]; //! making a copy of the ADDRESS; copy with spread operator to copy values into NEW address

// arrA.push(99)
// console.log(arrA);
// console.log(arrB);

// let area = function () {

// }
// let area = () => {

// }

// (function (num1, num2)){

// } ()
//     ((num1, num2))=> {

// } ()

// function greeting() {
//     console.log('hello world');
// }

// let greeting = function () {
//     console.log('hello world');
// }
// greeting()

//* saving functions to variables allows us to pass functions into other functions

// let add = function (num1, num2) {
//     return num1 + num2;
// }lo

// let add = (num1, num2) => num1 + num2;

// let subtract = function (num1, num2){
// return num1 - num2;
// }

// let subtract = (num1, num2) => num1 - num2;

// let calc = function (num1, num2, xoperationFunctionx) { // passing one function into another one is called a CALLBACK
//     return xoperationFunctionx(num1, num2);
// }

// let result = calc(5, 6, add)
// console.log(result);

//* arrays have built-in functions that make use of callbacks
// let arr2 = new Array(1, 2, 3, 4, 5)
//* forEach iterates over your array and calls a function for each element.  The element is passed to your callback function.
// let arr = [1, 2, 3, 4, 5]
// // arr.forEach(function (val) {
// //     console.log(val);
// // })

// arr.forEach(function (val) {
//     let sum = 3 + val;
//     console.log(val * sum);
// })
// // / let subtract = function (num1, num2){
//     return num1 - num2;
//     }
// let add = (num1, num2) => num1 + num2;

//* MAP OBJECT - this creates a NEW array

// let nums = [67, 45, 39, 20]
// let newNums = nums.map(val => {
//     return val.toString()
// })
// console.log(nums);
// console.log(newNums);

//* FILTER OBJECT - this also creates a NEW array
// let arr = [67, 45, 39, 20]
// let newArr = arr.filter((num) => {
//     return true;
// })
// console.log(newArr);

// let newArr2 = arr.filter((num) => {
//     return false;
// })
// console.log(newArr2);

//* SOME OBJECT:  returns true if at least one element passes condition
// let arr = [67, 45, 39, 20]
// let answer = arr.some(num => {
//     return num < 10;
// })
// console.log(answer);

// let arr = [67, 45, 39, 20]
// let answer = arr.some(num => {
//     return num > 10;
// })
// console.log(answer);