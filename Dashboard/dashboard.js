'use strict'

const express = require('express')

const router = express.Router()



router.post('/dashboard', (req,res,next) =>{
    res.sendFile('dashboard.html', {root:'Dashboard'});
   console.log(req.body); 
})

router.get('/dashboard', (req,res,next) =>{
    res.sendFile('404.html', {root: 'Dashboard'})
})

module.exports ={
    router: router,
}
