// npm install ejs

const express = require('express');
const app = express()
const path = require('path')
let PORT = 3000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home') // don't have to include .ejs bc we used default folder
})

app.listen(PORT, () => { // port, callback fxn
    console.log(`listening on port: ${PORT}`);
})