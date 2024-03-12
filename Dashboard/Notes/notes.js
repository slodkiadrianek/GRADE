'use strict'

const express = require('express')

const router = express.Router()

router.get('/notes', (req, res, next) =>{
    res.sendFile('/notes.html', {root: 'Dashboard/Notes'})
})

module.exports = router