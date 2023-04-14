// DEFAULT PARAMETERS

// const add2Numbers = (num1 = 0, num2 = 0) => {
//     // num1 = num1 || 0;
//     // num2 = num2 || 0;
//     return num1 + num2;
// }

// let result = add2Numbers()
// console.log(result)

// REST PARAMETERS
// let arr = [1, 2, 3, 4, 5]
// const logArgs = (params) => {
//     // arguments is a js keyword
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i];)
//     }
// }
// logArgs(arr);

// const logArgs = (...args) => {
//     for (let i = 0; i < args[0].length; i++) {
//         console.log(args[0][i])
//     }
// }

// logArgs(arr)

// const names = (...args) => {
//     for (name of args) {
//         console.log(name);
//     }
// }
// names('Joy', 'Katie', 'Kelly', 'Hunter', 'Mo', 'Jordan', 'Justin', 'Ethan')

// const sum = (...args) => {
//     return args.reduce((prev, curr) => {
//         return prev + curr;
//     }, 0)
// }
// console.log(sum(43, 56, 28, 69))
// console.log(sum(3,8))

// for OF = arrays | for IN = objects

// let nums = {
//     a: 10,
//     b: 20,
//     c: 'string',
//     d: 12
// }

// for (let key in nums) {
//     console.log(key, nums[key])
// }
// console.log(Object.keys(nums))

// let numsArr = Object.keys(nums)
// for (let i = 0; i < numsArr.length; i++) {
//     console.log(numsArr[i])
// }

// let arr = [43, 56, 28, 69]

// for (val of arr) {
//     console.log(val)
// }

// if you think some of your code might not work, use try/catch/fail.
// Try:  specify the code you think might throw an exception within the "try" block.
// Catch:  blocks an exception, and steps in with alternate code.
// // Finally:  this block will run either way, whether the try block succeeds or fails.

let num = 1;
try {
num.toPrecision(200) //we know this will fail bc the range is 1-21, throws range error
}
catch {

}
finally {

}

console.log(object);