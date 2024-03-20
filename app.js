"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

const path = require("path");

const getError = require("./controllers/error");

app.use(express.static(path.join(__dirname, "public")));

const landingPage = require("./routes/basicMovements");

const dashboards = require("./routes/dashboard");

const notesPage = require("./routes/notes");

const librusPage = require("./routes/librus");

const librusDashboard = require("./routes/librusDashboard");

const dailytodolist = require("./routes/todolist");

const calendarPage = require("./routes/calendar");

const goalPage = require("./routes/goal");

app.use(goalPage);

app.use(calendarPage);

app.use(dailytodolist);

app.use(librusDashboard);

app.use(landingPage);

app.use(dashboards.router);

app.use(notesPage);

app.use(librusPage);

app.use(getError.get404);

app.listen(3000);
