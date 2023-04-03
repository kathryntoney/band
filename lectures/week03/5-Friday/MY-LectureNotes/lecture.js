//? Big O and Algorithms
// pattern recognition is key
// speed vs memory requirements
// Big O is the longest amount any function is going to take given the worst case scenario of input.
// it quantifies the performance of variou algorithms as the input size grows.  CHaracterizes functions according to their growth rates.
// arithmetic, variable assignment, and accessing elements in an array or object are CONSTANT
// searching for an element or finding the minimum value in an array are examples of LINEAR time
// a nested loop


//* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//* You may assume that each input would have exactly one solution, and you may not use the same element twice.

// let nums = [2, 7, 11, 15]
// let target = 9
// let cache = []

// let twoSum = function (nums, target) {
//     // let cache = {}
//     for (let val in nums) {
//         let cache = [val]
//     }
//     console.log(cache);

// let histogram = {};
// for (let i = 0; i < word.length; i++) {
//   // get the "i-th" letter of the word
//     let letter = word[i];
//   // if the letter is already in the histogram, increment its count
//     if (histogram[letter]){
//     histogram[letter]++;
//   }

// let x = target - i
// let cache = {}
// for (let i = 0; i < nums.length; i++) {
//     if ()
//     }
//     else {

//     }
// }
// }

//? class is like a template

// let jordan = {
//     firstName: `Jordan`,
//     city: `Nashville`
// }

class Student { // the class does NOT hold data, it is simply a TEMPLATE
    //initialize data
    constructor(firstName, city) { // parameter
        console.log("inside of my constructor");
        this.firstName = firstName; // instance variable:  variables for which each class object has its own copy
        this.city = city; // instance variables are defined as part of a method
        this.birthdate = birthdate
    }

    age () { // method
        let today = new Date()
        let age = today.getFullYear() - this.birthdate.getFullYear() // 2023 - 1986
        return age
    }
    // method
    greeting() {
        console.log(`hello world`);
    }

    greet (friend) {
        console.log(`hello`);

    hello () {
        console.log(friend); //! this won't work bc friend is a LOCAL variable
    }
    }
}

let jordan = new Student ("Jordan", "Nashville") // initiates an object: jordan is the object, an instance of the class Student
let kelly = new Student ("Kelly", "Houston")
let katie = new Student ("Katie", "Atlanta", 1986)

console.log(person.age());