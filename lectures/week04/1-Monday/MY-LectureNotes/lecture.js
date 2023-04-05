// class Student { // we are never going to directly instantiate this class on our own
//     constructor(firstName, city) {
//         // create instance variables
//         this.firstName = firstName;
//         this.city = city;
//     }

//     printStudent() { // not going to pass any arguments into this method, only for clg students
//         console.log((`${this.firstName} list in ${this.city}`));
//     }

// }

// class Campus { // this class is what we'll use to create students, this is the management system for all our clients
//     constructor() {
//         // create instance variables
//         this.students = []; // this will hold all of our student instances
//     }

//     addStudent(primaryName, cityVal) {
//         // create an instance of student
//         let studentObj = new Student(primaryName, cityVal)
//         // add student instance to array this.students
//         this.students.push(studentObj)
//     }
//     printStudentName() {
//         // loop through this.students = [] to print each name
//         for (let obj of this.students) {
//             console.log(studentObj.firstName);
//         }
//         numStudents() {
//             return this.students.length
//         }
//     }
// }

// let dc = new Campus();

// dc.addStudent('Katie', 'Atlanta')
// dc.addStudent('Ethan', 'Bonita Springs')
// dc.addStudent('Jordan', 'Nashville')
// dc.addStudent('Mohammad', 'Houston')
// dc.addStudent('Justin', 'Phoenix')

// dc.printStudentName() // this will give you a list of all the students in the campus

// array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

// targetSum = x + y
// 10 = 11 - 1

// x = targetSum - y

// function twoSum(array, targetSum) {
//     let cache = {};
//     let results = []; // pass back elements to equal targetSum
//     for (let val of array) {
//         cache[val] = val
//     }
//     console.log(cache);
//     for (let i = 0; i < array.length; i++) {
//         let y = array[i]
//         let calculatedVal = targetSum - y;
//         if (calculatedVal === cache[calculatedVal] && calculatedVal != array[i]) {
//             // there is a match found
//             results.push(array[y])
//         }
//     }
//     return results;
// }

// twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10)

//? ARROW FUNCTIONS
// function add(num1, num2) {
//     return num1 + num2
// }
// // change function to let, insert = between add and (), insert => between smoothie and curly
// let add = (num1, num2)=>{ // arrow function
//     return num1 + num2
// }

// then remove curlies and move return to original line
// let add = (num1, num2)=>num1 + num2
// console.log(add(4, 5));

//? ARROW EXERCISES
// let lvl1exercise4 = ()=>'hello world'
// console.log(lvl1exercise4());

// let lvl1exercise5 = ()=> ['hello world', 4]
//     // return an array containing the string 'hello world' and the number 4
// console.log(lvl1exercise5());

// let lvl2exercise1 = (num1, num2)=>num1 + num2
// console.log(lvl2exercise1(3, 4));

// let lvl2exercise2 = (num1, num2)=> num1 - num2
// console.log(lvl2exercise2(54, 33));

// let lvl2exercise3 = (num1, num2)=> num1 * num2
// console.log(lvl2exercise3(4, 5));

// let lvl2exercise4 = (num1, num2)=> num1 / num2
// console.log(lvl2exercise4(12, 3));

// let lvl2exercise5 = (num1) => (num1 += 2)
// console.log(lvl2exercise5(3));

let lvl3exercise1 = (w1, w2)=>(`${w1} ${w2}`)
console.log(lvl3exercise1('hello', 'world'));
    // Create a "hello" and a "world", return the concatenation of the two
  
// let lvl3exercise2 = (w1, n1)=>(`${w1} ${n1}`)
// console.log(lvl3exercise2('hello', 12));
    // Create a "hello" and a 12, return the concatenation of the two

// let lvl3exercise3 = (num)=>String(num)
// console.log(lvl3exercise3(12));
    // Create a variable that equals 12 and convert it to a string. Return it.

// let lvl3exercise4 = (str)=>str.length
// console.log(lvl3exercise4('hello world!'));
    // Create a "hello world!" string. Return the length of the string

let lvl3exercise5 = (str)=> [str]
console.log(lvl3exercise5('hello world'));

    // Create a "hello world" string. Return the index of the word "world".