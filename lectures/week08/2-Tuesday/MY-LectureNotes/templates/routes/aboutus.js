const express = require('express');
const router = express.Router(); // sets up sub-routing

router.get('/aboutus', (req, res) => {
    // res.send('aboutus')
    res.render('aboutus')
})

module.exports = router;