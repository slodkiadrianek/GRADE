'use strict'

const express = require('express')

const router = express.Router()

router.get('/todolist', (req, res, next) =>{
    res.sendFile('dailytodolist.html', {root: 'Dashboard/DailyToDoList'})
})

module.exports = router