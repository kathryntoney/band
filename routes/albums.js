const express = require('express');
const router = express.Router();

router.get('/albums', (req, res) => {
    res.send('albums')
})

module.exports = router;