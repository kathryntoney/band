const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('band')
    res.render('index')
})

module.exports = router;