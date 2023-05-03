//? to get set up for Express, do 'npm init -y' + 'npm install express'

const express = require('express'); // function block - invoke fxn to return object
let app = express() // invoked fxn returns object into your variable
let PORT = 3000;


//* route handler
// routing = def of app end points (URIs) and how they respond to client requests
// handler = callback fxn that executes when a matching request type is found on a relevant route
app.get('/', (request, response) => { // localhost: 3000 is implied; ex: 3000/about = /about
    response.send('<h1>hello bostie</h1>')
})

app.get('/about', (request, response) => {
    response.send('<h1>about bosties</h1>')
})

app.get('/faq', (request, response) => {
    response.send('<h1>bostie faq</h1>')
})

app.get('/menu', (request, response) => {
    response.send('<h1>bostie menu</h1>')
})


//? mark optional characters with ? like - 
app.get('/cats?', (request, response) => {
    response.send('<h1>bosties love cats</h1>')
})

//? * makes (chars) optional
app.get('/bat(wo)*man', (request, response) => {
    response.send('<h1>batperson</h1>')
})

app.get('/the(fancy)?cats?', (request, response) => {
    response.send('fancy cats')
})

// localhost:3000/name?fname=Katie&lname=Toney&city=Atlanta
app.get('/name', (request, response) => {
    let firstName = request.query.fname // grabs Katie
    let lastName = request.query.lname // grabs Toney
    let city = request.query.city // grabs Atlanta

    response.send(`<h1>${firstName} ${lastName} lives in ${city}</h1>`)
})

// make it more secure like this: localhost:3000/name/fname/lname/city <- known as friendly URLs
// localhost:3000/name/Katie/Toney/Atlanta
app.get('/name/:fname/:lname/:city', (request, response) => { // have to include colons bc this isn't actually a path, it just looks like one
    let firstName = request.params.fname // grabs Katie
    let lastName = request.params.lname // grabs Toney
    let city = request.params.city // grabs Atlanta

    response.send(`<h1>${firstName} ${lastName} lives in ${city}</h1>`)
})

app.get('/name/:fname/:lname/:city', (request, response) => { // have to include colons bc this isn't actually a path, it just looks like one
    let { fname: firstName, lname: lastName, city } = request.params

    response.send(`<h1>${firstName} ${lastName} lives in ${city}</h1>`)
})

app.listen(PORT, () => { // port, callback fxn
    console.log(`listening on port: ${PORT}`);
})

let data = {
    data: [{
        id: 0,
        name: "Golden Retriever",
        img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
    },
    {
        id: 1,
        name: "Lab",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
    },
    {
        id: 2,
        name: "pug",
        img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
    },
    {
        id: 3,
        name: "poodle",
        img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
    }
    ]
}

//dog
app.get('/dogs', (req, res) => {
    let htmlFragment = "" // accumulator
    let dogsArr = data.data;
    dogsArr.forEach((obj) => {
        htmlFragment += `
        <a href="/dogs/${obj.id}"> <h1>${obj.name}</h1> </a>
        <a href="/dogs/${obj.id}"> <img src="${obj.img}" width="400px" </a>
        `
    })
    res.send(htmlFragment)
})


//localhost:/dogs/1
// app.get('/dogs/:id', (req, res) => {
//     let { id } = req.params;
//     let name = data.data[id].name;
//     let img = data.data[id].img;

//     res.send(`
//     <h1>${name}</h1>

// <ul>
// <li> <a href="/dogs">Home</a></li>
// <li> <a href="/dogs/0">Golden Retriever</a> </li>
// <li> <a href="/dogs/1">Lab</a> </li>
// <li> <a href="/dogs/2">Pug</a> </li>
// <li> <a href="/dogs/3">Poodle</a> </li>
// </ul>

//     <img src="${img}" width="400px">
    
//     `)
// })

