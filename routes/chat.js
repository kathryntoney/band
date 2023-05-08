const express = require('express')
const router = express.Router()
let dataFile = require('../data/data.json')
let albumData = dataFile.albums;

router.get('/chat', (req, res) => {
    res.render('chat', {
        albums: albumData
    })
})

module.exports = router;