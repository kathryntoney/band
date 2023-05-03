const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json')
let albumData = dataFile.albums;

router.get('/albums', (req, res) => {
    let trackList = [];
    albumData.forEach(albumObj => {
        trackList = trackList.concat(albumObj.trackList)
    })

    res.render('albums', {
        trackList: trackList,
        albums: albumData,
    })
})

// router.get('/albums/:album', (req, res) => {
//     let album = req.params.album;
//     res.render('album', { album })
// })

module.exports = router;