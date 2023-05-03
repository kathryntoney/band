const express = require('express');
let app = express();
let PORT = 3000;
// put ejs engine above all routes
app.set('view engine', 'ejs');

//* MVC:  model viewer controller:  separate logic into units to make it more manageable
//* making new files in routes folder

// app.get('/', (req, res) => {
//     res.send('home page')
// }) <- this is replaced with index.js module

app.use(require('./routes/index')) // <- replaces code above

// app.get('/faq', (req, res) => {
//     res.send('home page')
// })

app.use(require('./routes/faq'))

// app.get('/city', (req, res) => {
//     res.send('home page')
// })

app.use(require('./routes/city'))

// app.get('/aboutUS', (req, res) => {
//     res.send('home page')
// })

app.use(require('./routes/aboutus'))

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})
