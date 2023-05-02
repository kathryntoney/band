const express = require('express');
const router = express.Router(); // sets up sub-routing

router.get('/faq', (req, res) => {
    // res.send('faq')
    res.render('faq')
})

module.exports = router;