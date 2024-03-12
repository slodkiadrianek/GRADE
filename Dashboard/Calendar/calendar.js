'use strict'

const express = require('express')

const router = express.Router()

router.get('/calendar', (req, res, next) =>{
    res.sendFile('calendar.html', {root: 'Dashboard/Calendar'})
})

module.exports = router