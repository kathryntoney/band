const express = require('express');
let app = express()
let PORT = 3000;

app.listen(PORT, () => { // port, callback fxn
    console.log(`listening on port: ${PORT}`);
})
// ===========================================

//? 1. Make an express program that will display "Hello, world!" at the root URL: /
app.get('/', (request, response) => {
    response.send('<h1>hello, world!</h1>')
})

//? 2. Add the following pages: "meow" at the URL /cats and "woof" at the URL /dogs and "living together" at /cats_and_dogs
app.get('/cats', (request, response) => {
    response.send('<h1>meow</h1>')
})

app.get('/dogs', (request, response) => {
    response.send('<h1>woof</h1>')
})

app.get('/cats_and_dogs', (request, response) => {
    response.send('<h1>living together</h1>')
})

//? 3. Say a greeting to the user, given that their name is encoded in the URL (/greet/Kennedy should say "hello, Kennedy!")
app.get('/greet/:fname', (request, response) => {
    let firstName = request.params.fname
    response.send(`<h1>Hello, ${firstName}!</h1>`)
})

//? 4. Display the year you were born when you report your age in a query parameter (/year?age=32 displays "you were born in 1985")
app.get('/year', (request, response) => {
    let age = request.query.age
    response.send(`<h1>you were born in ${2023 - age}</h1>`)
})


//localhost:3000/calculator/6/34/operator
appendFile.get('/calculator', (req, res) => {
    res.send('answer')
})
