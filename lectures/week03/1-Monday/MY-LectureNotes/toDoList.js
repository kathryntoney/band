const prompt = require('prompt-sync')({ sigint: true });
// DO NOT TOUCH!!!

//* When you begin a project, the first task you want to take on is configuring storage of your data.

//* Step 1 - prompt User to make a choice:
//* 1. add a to-do list item
//? prompt user for the item
//? take the item (string) and push it to our list
//? display our list
//* 2. update a to-do list item
//? print out a numerical list of items
//? ask user which item to update
//? caste the chosen number to an integer
//? modify the integer by -1 to access the array value
//? prompt user for the update
//? todos[index - 1] = new value
//? display our list
//* 3. remove a to-do list item
//? ask user which item to remove
//? remove the item
//? display our list
//* 4. end program

//* prompt user to make a choice:
let todos = [] //? this is how we will store the input from our user

// console.log("What would you like to do?");
// console.log("1. Add a new to-do list item");
// console.log("2. Update an existing to-do list item");
// console.log("3. Remove an existing to-do list item");
// console.log("4. Review full to-do list");
// console.log("5. End program");

let exit = 5;
let menuChoice = 0;
let newItem = "";
let updateItem = 0;

while (menuChoice != exit) {
    menuChoice = Number(prompt(`
What would you like to do? 
1. Add a new to-do list item
2. Update an existing to-do list item
3. Remove an existing to-do list item
4. Review full to-do list
5. Exit
Enter the number that corresponds with your selection: `));


    switch (menuChoice) {
        case 1: //add item
            newItem = prompt("What would you like to add? ");
            todos.push(newItem)
            break;
        case 2: //update item
            for (let index = 0; index < todos.length; index++) {
                console.log(`${index + 1}. ${todos[index]}`);
            }
            updateNum = Number(prompt("Enter the number that corresponds with the task you want to update: "))
            arrIndex = updateNum - 1
            todos[arrIndex]
            updateTxt = prompt("Type in the update you want to make: ")
            todos.splice(arrIndex, 1, updateTxt)
            break;
        case 3: // remove item
            for (let index = 0; index < todos.length; index++) {
                console.log(`${index + 1}. ${todos[index]}`);
            }
            removeNum = Number(prompt("Enter the number that corresponds with the task you want to remove: "))
            arrIndex = removeNum - 1
            todos[arrIndex]
            todos.splice(arrIndex, 1)
            break;
        case 4: // review list
            console.log(`
This is your to-do list: `);
            for (let index = 0; index < todos.length; index++) {
                console.log(`${index + 1}. ${todos[index]}`);
            }
            break;
        default: // when menuChoice = default, the program exits
            break;
    }
}
