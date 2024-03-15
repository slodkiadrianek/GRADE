'use strict'

const express = require('express')

const router = express.Router()

router.get('/translate', (req,res,next) =>{
    res.sendFile('translatetor.html', {root: 'Dashboard/Transletor'})
})

module.exports = router