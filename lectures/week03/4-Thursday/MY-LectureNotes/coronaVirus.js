
let covidData = require('./data');

//  * Print the follwoing for each state and territory:
//  * 1. State Name 
//  * 2. State Population 
//  * 3. Number of Cases 
//  * 4. Number of Deaths
// for (let val of covidData) {
//     console.log(`State:  ${val.state}`);
//     console.log(`Pop:  ${val.population}`);
//     console.log(`# Cases:  ${val.cases}`);
//     console.log(`# Deaths:  ${val.deaths}`);
// }

//  * Find the following:
//  * 1. Total (sum) of all the cases for each state and territory:
// let sum = 0
// for (let val of covidData) {
//     sum += val.cases
// }
// console.log(sum);

//  * 2. Which state or territory had the highest number of cases:
// let highest = {state: ``, cases: 0}
// for (let i = 0; i < covidData.length; i++) {
//     if (covidData[i].cases > highest) {
//         highest.state = covidData[i].state
//         highest.cases = covidData[i].cases
//     }
// }
// console.log(`${highest.state}: ${highest.cases}`);

//  * 3. Which state or territory had the highest number of deaths:
let highest = 0;
for (let i = 0; i < covidData.length; i++) {
    if (covidData[i].deaths > highest) {
        highest = covidData[i].deaths
    }
}
console.log(highest);
//  * 4. Lowest state or territory for deaths
//  * 5. Lowest state or territory for cases
// let lowest = 999999999999999999999
// for (let i = 0; i < covidData.length; i++) {
//     if (covidData[i].deaths < lowest) {
//         let lowest = covidData[i].deaths
//     }
// }
// console.log(lowest);

