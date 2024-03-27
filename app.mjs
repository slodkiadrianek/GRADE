"use strict";

import express from "express";

import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

import path from "path";

import getError from "./controllers/error.js";

app.use(
  express.static(path.join('E:/GRADE-main', "public"))
);
//'E:/GRADE-main'
//"C:/Users/Adrian/Desktop/Gradetion/GRADE

import landingPage from "./routes/basicMovements.js";

import dashboards from "./routes/dashboard.js";

import notesPage from "./routes/notes.js";

import librusDashboard from "./routes/librusDashboard.js";

import dailytodolist from "./routes/todolist.js";

import calendarPage from "./routes/calendar.js";

import goalPage from "./routes/goal.js";

import translatePage from "./routes/translator.js";

app.use(translatePage);

app.use(goalPage);

app.use(calendarPage);

app.use(dailytodolist);

app.use(librusDashboard);

app.use(landingPage);

app.use(dashboards);

app.use(notesPage);

app.use(getError);

app.listen(3000);
