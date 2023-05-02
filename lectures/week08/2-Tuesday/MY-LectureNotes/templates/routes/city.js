const express = require('express');
const router = express.Router(); // sets up sub-routing

router.get('/city', (req, res) => {
    // res.send('city')
    res.render('city')
})

module.exports = router;