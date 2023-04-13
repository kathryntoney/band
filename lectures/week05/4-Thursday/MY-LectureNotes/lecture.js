// console.log('first');

// setTimeout(() => { // this is an asynchronous function
//     console.log(('second'));
// }, 0)

// // for (let i = 0; i < 10; i++) {
// //     console.log((i));
// // }

// console.log(('third'));

// let div = document.getElementById('#hello')
// console.log('first');
// div.addEventListener('click', () => { // this is asynchronous bc it doesn't execute until click
//     console.log('second');
// })

// console.log('third');

// setTimeout(() => {
//     console.log('retrieving data');
// }, 1000);

// console.log('process data'); // first
// console.log('some synchronous stuff'); 
// process data
// some sync stuff
// retrieving data
// need figure out a way to wait for data to be retrieved before it is processed

// javascript PROMISE

// let promise = new Promise((resolve, reject) => { // callback function = 2 params: resolve and reject
//     // promises typically have async code
//     let isValid = true;
//     setTimeout(() => {
//         if (isValid) {
//             resolve('success')
//         }
//         else {
//             reject('error')
//         }
//     }, 1000);
// })
// promise.then((result) => {
//     console.log('result');
// })
// promise.catch((result) => {
//     console.log('result');
// })
// console.log('waiting to process');


// Create a promise that resolves after 2s with the msg "Hello World!" and logs the result to the console.
// let result = new Promise((resolve, reject) => {
//     let isValid = true;
//     if (isValid) {
//         resolve('hello, world!')
//     }
//     else {
//         reject('error')
//     }
// }, 2000)

// result.then((result) => {
//     console.log(result);
// })
// result.catch((result) => {
//     console.log(result);
// })

// Create a promise that generates a random number between 1 and 10 and resolves with that number.
// If the generated number is <5, reject with the msg "number too low"
// let result = new Promise((resolve, reject) => {
//     let num = Math.floor(Math.random() * 10) +1;
//     if (num >= 5) {
//         resolve(num)
//     }
//     else {
//         reject('num too low!')
//     }
// })
// result.then((result) => {
//     console.log(result);
// })
// result.catch((result) => {
//     console.log(result);
// })

