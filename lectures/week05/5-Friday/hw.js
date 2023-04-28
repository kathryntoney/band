// Write a recursive function called Reverse which accepts a string and returns a new string in reverse.

// function reverseString(string) {
//     if (string === "") return "";
//     else return reverseString(string.substring(1)) + string.charAt(0);

// }

// console.log(reverseString("computer"));

// let reverse = (string) => {
//     let revStr = "";
//     if (string.length === 1) {
//         return string;
//     }
//     else {
//         revStr += string[string.length - 1];
//         string = string.substr(0, string.length - 1);
//         return revStr + reverse(string);
//     }
// }
// let result = reverse('hello world');
// console.log(result);

// const reverse = (string) => {
//     if (string.length == 0) return "";
//     return reverse(string.slice(1)) + string[0]
// string.slice(1) will return the string without the first character
// then we add the first character onto the end of the string (elloh)
// reverse('') -> ""
// reverse('o') -> "" + 'o'=> "o"
// reverse('lo') -> reverse('o') + l
// reverse('llo') -> reverse('lo') + l
// reverse('ello') -> reverse('llo') + e
// reverse('hello') -> reverse('ello') + h

// reverse('') => ""
// reverse('o') => "" + 'o' => "o"    
// reverse('lo') => "o" + 'l' => "ol"
// reverse('llo') => "ol" + 'l' => "oll"
// reverse('ello') => "ool" + "e" => "olle"
// reverse('hello) => "olle" + "h" => "olleh"
// }
// balanced brackets

// function balancedBrackets(input) {
//     if (input % 2 !== 0) return false;
//     else {
//         let stack = [];
//         for (let i = 0; i < input.length; i++) {
//             if (input[i] == '(' || input[i] == '[' || input[i] == '{') {
//                 stack.push(input[i]) // stack = {([ ; input = })]
//             }
//             if (input[i] == ')' || input[i] == ']' || input[i] == '}') {
//                 let x = stack.pop();
//                 if (x == ')' && input[i] != '(') {
//                     return false;
//                 }
//                 if (x == '[' && input[i] != ']') {
//                     return false;
//                 }
//                 if (x == '{' && input[i] != '}') {
//                     return false;
//                 }
//                 else {
//                     return true;
//                 }
//             }
//         }


//     }
// }

// console.log(balancedBrackets('[({})]'));


// function balancedBrackets(input) {
//     let brackets = '[({})]'
//     // opening brackets have EVEN indexes, closing brackets have ODD indexes
//     let stack = []
//     for (let bracket of input) {
//         let bracketsIndex = brackets.indexOf(bracket) // this is the index of the current bracket in the brackets string
//         console.log(bracketsIndex);
//         if (input.length % 2 === 0) { // if string is not an even number, we know it's not balanced
//             stack.push(stack.pop(brackets))
//             console.log(stack);
//         }
//     }
//     return stack;
// }

// const balancedBrackets = (string) => {
//     let stack = [];
//     let opening = {
//         "(": true,
//         "[": true,
//         "{": true
//     }
//     let closing = {
//         ")": "(",
//         "]": "[",
//         "}": "{"
//     }
//     for (let i = 0; i < string.length; i++) {
//         let char = string[i]
//         if (opening[char]) {// will return true;
//             stack.push(char)
//         }
//         if (char in closing) {
//             let lastChar = stack.pop();
//             if (lastChar != closing[char])
//                 return false;
//         }
//     }
//     return stack.length() === 0 ? true : false;
// }

