'use strict'

const express = require('express')

const router = express.Router()

router.get('/changePassword', (req, res, next) =>{
    res.sendFile('changepassword.html', {root: 'Dashboard/Changepassword'})
})

module.exports = router