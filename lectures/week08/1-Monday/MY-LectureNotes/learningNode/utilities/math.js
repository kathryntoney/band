//? reduce - sum all nums in array

let nums = [3, 4, 5, 6]

// const reduce = (arr) => {
//     const reduce = arr.reduce((total, item) => total + item);
//     console.log(reduce);
//     return reduce;
// }

// reduce(nums);

const sum = (arr) => arr.reduce((total, item) => {
    return total + item;
}, 0)

// const forOf = (arr) => {
//     let sum = 0;
//     for (let val of arr) {
//         sum += val;
//     }
//     console.log(sum);
//     return sum;
// }

// forOf(nums)

// const forLoop = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     console.log(sum);
//     return sum;
// }

// forLoop(nums)

const multiply = (arr) => arr.reduce((acc, curr) => {
    return acc * curr
}, 1)

let math = {
    sum: sum,
    multiply: multiply,
}

module.exports = math