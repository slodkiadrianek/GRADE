import taskList from "../model/todolistM.js";

import goals from "../model/goalsM.js";
import calendarMoves from "../model/calendarM.js";
import eventList from "../model/newEventM.js";
import sheetsList from "../model/notesM.js";
import getDate from "../model/calendarLibrusM.js";
const newCalendar = new calendarMoves();
newCalendar.getActualDate();
const getActualDate = new getDate();
getActualDate.getActualDate();

import translatet from "../model/translateAPI.js";


const postDashboard = (req, res, next) => {
res.render("dashboard/dashboard", { root: "views", pageTitle: "Dashboard" });
};
const notesPage = (req, res, next) => {
res.render("dashboard/notes", {
root: "views",
pageTitle: "Notes",
sheetsList: sheetsList,
actualSheet: sheetsList[seeSheet],
});
};

let librusError;
const librusPage = (req, res, next) => {
res.render("dashboard/librus", { root: "views", textError: librusError });
};

const todolistPage = (req, res, next) => {
res.render("dashboard/dailytodolist", {
root: "views",
pageTitle: "To do list",
List: taskList,
});
};
const calendarPage = (req, res, next) => {
res.render("dashboard/calendar", {
root: "views",
daysInMonth: newCalendar.daysInMonth,
actualMonth: newCalendar.whichMonth(),
year: newCalendar.actualYear,
eventList: eventList,
month: newCalendar.actualMonth,
pageTitle: "Kalendarz",
});
};

const goalPage = (req, res, next) => {
res.render("dashboard/goal", { root: "views", pageTitle: "Cele", goalsList: goals });
};
const taskPage = (req, res, next) => {
taskList.push({
    task: req.body.task,
    date: req.body.date,
    priority: req.body.priority,
});
res.redirect("/todolist");
};
const deletePage = (req, res, next) => {
let itemToRemove;
for (let [index, value] of Object.entries(taskList)) {
    value.task === req.body.taskElement ? (itemToRemove = index) : "";
}
taskList.splice(itemToRemove, 1);
res.redirect("/todolist");
};
const newGoal = (req, res, next) => {
goals.push({
    goal: req.body.goal,
    goalDate: req.body.goalDate,
    progress: "0",
});
console.log(goals);
res.redirect("/goal");
};

const editGoal = (req, res, next) => {
goals.find((el) =>
    el.goal === req.body.taskElement ? (el.progress = req.body.progress) : ""
);
res.redirect("/goal");
};
const previous = (req, res, next) => {
newCalendar.previousMonth();
res.redirect("/calendar");
};

const next = (req, res, next) => {
newCalendar.nextMonth();
res.redirect("/calendar");
};

const eventPage = (req, res, next) => {
eventList.push({ event: req.body.event, eventDate: req.body.eventDate });
res.redirect("/calendar");
};

const deleteEvent = (req, res, next) => {
const itemToRemove = eventList.indexOf(req.body.eventText);
eventList.splice(itemToRemove, 1);
res.redirect("/calendar");
};

const addToSheet = (req, res, next) => {
sheetsList[req.body.sheets] += req.body.note;
// console.log(req.body);
res.redirect("/notes");
};
let seeSheet;
const showSheet = (req, res, next) => {
seeSheet = req.body.sheets;
res.redirect("/notes");
};

const newSheet = (req, res, next) => {
const newSheet = req.body.sheetName;
sheetsList[newSheet] = "";
res.redirect("/notes");
};

let outputetText;
let errorText;
const translate = (req, res, next) => {
translatet(req.body.textToTranslate, req.body.toLanguage)
    .then((res) => (outputetText = res.text))
    .then(() => res.redirect("/translate"))
    .catch((e) => {
    (errorText = "Wystąpił problem, sprawdź połączenie  z internetem"),
        res.redirect("/translate");
    });
};

const translatePage = (req, res, next) => {
res.render("dashboard/translator", {
    root: "views",
    pageTitle: "Translator",
    translatedText: outputetText,
    translatedErrorText: errorText,
});
};


export{ translate,
translatePage,
newSheet,
showSheet,
addToSheet,
eventPage,
next,
previous,
editGoal,
newGoal,
deleteEvent,
taskPage,
goalPage,
calendarPage,
todolistPage,
librusPage,
notesPage,
postDashboard,
deletePage,}