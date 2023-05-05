const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json')
let albumData = dataFile.albums;

const fs = require('fs')
const messages = require('../data/messages.json')

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/messages', (req, res) => {
    res.render('messages', {
        albums: albumData
    })
})

router.get('/api', (req, res) => {
    res.json(messages)
    console.log(messages);
})

router.post('/api', (req, res) => {
    let { name, title, message, index } = req.body;
    messages.unshift(req.body)
    fs.writeFile('data/messages.json', JSON.stringify(messages), "utf8", err => {
        if (err) {
            res.status(423).send(err)
        }
    })
    res.json(messages)
})

router.delete('/api/:index', (req, res) => {
    const { index } = req.params
    messages.splice(index, 1)
    fs.writeFile('data/messages.json', JSON.stringify(messages), "utf8", err => {
        if (err) {
            res.status(423).send(err)
        }
    })
    res.json(messages)
})




module.exports = router;