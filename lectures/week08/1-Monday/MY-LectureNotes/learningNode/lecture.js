//? people name the starter code for projects different things - app, index, server.js

//* Create a local module:
// const firstName = require('./app');

// console.log(firstName);

// const logging = require('./log')

// logging.warning('memory leak')

//* class stack:

// const Stack = require('./utilities/stack')

// let stack = new Stack();
// stack.push(3);
// stack.push(7);
// stack.push(0);
// stack.push(1);
// stack.push(6);

// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());

//* maths:
// const maths = require('./utilities/math')
// console.log(maths.sum([3, 4, 5, 6]));
// console.log(maths.multiply([3, 4, 5, 6]));

//* error-first callbacks:
// const fs = require('fs'); //core node module that allows us to read and write to file system
// let fileName = 'sample.txt'
// let content = 'node is pretty awesome'
// fs.writeFile(fileName, content, (error) => {
//     if (error) {
//         console.log(error.message);
//         return;
//     }
//     console.log(`file saved at sample.txt`);
// })

//* reading from other files:
// const fs = require('fs');
// fs.readFile('preamble.txt', (err, buffData) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     // console.log(`file data: ${buffData.toString()}`);
//     let data = buffData.toString().split(" ")
//     // for (let word of data) {
//     //     console.log(word);
//     // }

//     let starData = data.join('*');
//     console.log(starData);
// })

//? installing Express! npm install express
// Express has a ton of modules / dependencies
const fs = require('fs')
const express = require('express')