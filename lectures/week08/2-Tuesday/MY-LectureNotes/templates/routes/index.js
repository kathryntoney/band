const express = require('express');
const router = express.Router(); // sets up sub-routing

router.get('/', (req, res) => {
    // res.send('home page') // <- don't need this anymore with EJS
    res.render('index')
})

module.exports = router;

// wire this up with app.js