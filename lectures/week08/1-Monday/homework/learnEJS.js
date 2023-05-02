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

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { random: num })
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit })
})

app.listen(PORT, () => { // port, callback fxn
    console.log(`listening on port: ${PORT}`);
})