const express = require('express');
const router = express.Router(); // sets up sub-routing

router.get('/', (req, res) => {
    // res.send('home page') // <- don't need this anymore with EJS
    res.render('index', { // add in object to pass data to index view
        greeting: 'hello world',
        firstName: 'katie',
        lastName: 'toney',
        year: 2023,
        nums: [1, 2, 3, 4, 5],
        contacts: {cell: 555-555-5555, email: 'katie@kathryntoney.com'}
    })
})

module.exports = router;

// wire this up with app.js