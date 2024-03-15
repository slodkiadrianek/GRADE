'use strict'

const express = require('express')

const router = express.Router()

router.get('/logowanie', (req,res,next) =>{
    res.sendFile('logowanie.html', {root: 'Login'})
})



module.exports = router