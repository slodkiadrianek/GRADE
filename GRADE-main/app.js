'use strict'

const express = require('express')
const bodyParser = require("body-parser");


const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

const path  = require('path')

app.use(express.static(path.join(__dirname, 'public')))



const landingPageRouter = require('./Landing Page/LandingPage')

const DashboardRouter = require('./Dashboard/dashboard')

const loginRouter = require('./Login/logowanie')

const calendarRouter = require('./Dashboard/Calendar/calendar')

const changePasswordRouter = require('./Dashboard/ChangePassword/changepassword')

const dailytodolistRouter = require('./Dashboard/DailyToDoList/dailytodolist')

const goalRouter = require('./Dashboard/Goals/goals')

const notesRouter = require('./Dashboard/Notes/notes') 

const translateRouter = require('./Dashboard/Transletor/translatetor')

app.use(landingPageRouter)

app.use(DashboardRouter.router)

app.use(loginRouter)

app.use(calendarRouter)

app.use(changePasswordRouter)

app.use(dailytodolistRouter)

app.use(goalRouter)

app.use(notesRouter)

app.use(translateRouter)

app.use((req,res,next) =>{
    res.sendFile('404.html', {root: 'Dashboard'})
})

app.listen(3000)