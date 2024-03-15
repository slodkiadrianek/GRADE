'use strict'

const express = require('express')

const router = express.Router()

router.get('/goal', (req,res,next) =>{
    res.sendFile('goals.html', {root: 'Dashboard/Goals'})
})

module.exports = router