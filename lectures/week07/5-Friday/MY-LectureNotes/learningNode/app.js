//? build a server! - listen to requests, respond to them

// req + enter
const http = require('http') // we need the library called http -> https://nodejs.org/dist/latest-v20.x/docs/api/http.html
const cow = require('cowsay'); // the variable name doesn't matter, but what's inside the require() does
const heroes = require('superheroes')

let students = [
    {
        fName: "Victoria",
        city: "Atlanta"
    },
    {
        fName: "Andrew",
        city: "Atlanta"
    },
    {
        fName: "Stephen",
        city: "Houston"
    },
    {
        fName: "James",
        city: "Austin"
    },
    {
        fName: "Matt",
        city: "Seattle"
    },

]
// call a method on http
const server = http.createServer((request, response) => { // pretty much everything in Node is going to have a callback
    switch (request.url) { // how is user trying to locate me? -- endpoints / routes
        case '/': // localhost:3000/ (homepage - like yahoo.com)
            // what are we sending back to the client?
            response.setHeader('Content-Type', 'text/html s') // this is how you tell them what you're sending
            response.end(`<h1>hello world</h1>`) // when we send the response back, it will render an html page for the client
            break;
        case '/aboutus':
            response.end('<h1>about us</h1>')
            break;
        case '/api': // content type will change bc we're not sending back html any more - it will be json
            response.setHeader('Content-Type', 'application/json')
            let studentsJSON = JSON.stringify(students)
            response.end(studentsJSON) // sending back json data to client
        default:
            break;
    }
})


console.log(cow.say({
    text : "I'm a moooodule",
    e : "oO", // eyes
    T : "U " // tongue
}));

console.log(heroes.all);
console.log(heroes.random());

// we built the server, now we need to turn it on

// sockets: a bunch of "things" listening for requests, and there are 64k of them - so we have to specify which one we want
server.listen(3000, () => {
    console.log(`server is running on port 3000`); // localhost:3000
})



