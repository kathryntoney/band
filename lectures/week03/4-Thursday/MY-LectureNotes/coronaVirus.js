
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
// let highestCases = 0
// let highestState = ''
// for (let i = 0; i < covidData.length; i++) {
//     if (covidData[i].cases > highestCases) {
//         highestState = covidData[i].state
//         highestCases = covidData[i].cases
//     }
// }
// console.log(`${highestState}: ${highestCases}`);

//  * 3. Which state or territory had the highest number of deaths:
// let highestDeaths = 0
// let highestState = ''
// for (let i = 0; i < covidData.length; i++) {
//     if (covidData[i].deaths > highestDeaths) {
//         highestState = covidData[i].state
//         highestDeaths = covidData[i].deaths
//     }
// }
// console.log(`${highestState}: ${highestDeaths}`);

//  * 4. Lowest state or territory for deaths
// let lowestDeaths = Infinity
// let lowestState = 0

// for (let i = 0; i < covidData.length; i++) {
//     if (covidData[i].deaths < lowestDeaths) {
//         lowestDeaths = covidData[i].deaths
//         lowestState = covidData[i].state
//     }
// }
// console.log(`${lowestState}: ${lowestDeaths}`);

//  * 5. Lowest state or territory for cases
// let lowestCases = Infinity;
// let lowestState = 0
// for (let i = 0; i < covidData.length; i++) {
//     if (covidData[i].cases < lowestCases) {
//         lowestNumOfCases = covidData[i].cases
//         lowestState = covidData[i].state
//     }
// }
// console.log(`${lowestState}: ${lowestCases}`);
