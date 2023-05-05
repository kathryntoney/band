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
        pageTitle: "Haim"
    })
})

router.get('/albums/:albumID', (req, res) => {
    let albumID = req.params.albumID;
    let album = [];
    let trackList = [];

    albumData.forEach(albumObj => {
        if (albumObj.albumName == albumID) {
            album.push(albumObj)
            trackList = albumObj.trackList
            let youtube = true;
        }
    })

    res.render('albums', {
        // albums: albumData,
        trackList: trackList,
        albums: album,
        pageTitle: `Haim - ${album[0].albumName}`
    })
})

module.exports = router;