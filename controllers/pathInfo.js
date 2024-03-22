const giveData = require("../model/librusApi");
const taskList = require("../model/todolistM");
let allDataAboutUser;
let UserData;
const goals = require("../model/goalsM");
const calendarMoves = require("../model/calendarM");
const eventList = require("../model/newEventM");
const sheetsList = require("../model/notesM");
const { render } = require("ejs");
const newCalendar = new calendarMoves();
newCalendar.getActualDate();

const translate = require("../model/translateAPI");

exports.postDashboard = (req, res, next) => {
  res.render("dashboard", { root: "views", pageTitle: "Dashboard" });
};

exports.landingPage = (req, res, next) => {
  res.sendFile("landingPage.html", { root: "views" });
};

exports.loginPage = (req, res, next) => {
  res.sendFile("logowanie.html", { root: "views" });
};

exports.notesPage = (req, res, next) => {
  res.render("notes", {
    root: "views",
    pageTitle: "Notes",
    sheetsList: sheetsList,
    actualSheet: sheetsList[seeSheet],
  });
};

exports.librusPage = (req, res, next) => {
  res.sendFile("librus.html", { root: "views" });
};

exports.librusDashboard = (req, res, next) => {
  const newStudent = new giveData(req.body.login, req.body.password);

  newStudent
    .showData(req.body.login, req.body.password)
    .then((data) => {
      allDataAboutUser = data; // Tutaj otrzymasz wszystkie dane
    })
    .then(() =>
      allDataAboutUser.accountInfo.then((accInfo) => (userData = accInfo))
    )
    .then(() => {
      // console.log(allDataAboutUser.grades);

      res.render("librusDashboard", {
        root: "views",
        notifications: allDataAboutUser.notifications,
        luckyNumber: allDataAboutUser.luckyNumber,
        // grades: allDataAboutUser.grades,
        // absences: allDataAboutUser.absences,
        // info: allDataAboutUser.info,
        calendar: allDataAboutUser.calendar,

        accInfo: userData,
        // announcements: allDataAboutUser.announcements,
        pageTitle: "Librus Dashboard",
      });
      // console.log(allDataAboutUser.calendar);
    });
};

exports.todolistPage = (req, res, next) => {
  res.render("dailytodolist", {
    root: "views",
    pageTitle: "To do list",
    List: taskList,
  });
};
exports.calendarPage = (req, res, next) => {
  res.render("calendar", {
    root: "views",
    daysInMonth: newCalendar.daysInMonth,
    actualMonth: newCalendar.whichMonth(),
    year: newCalendar.actualYear,
    eventList: eventList,
    month: newCalendar.actualMonth,
    pageTitle: "Kalendarz",
  });
};

exports.goalPage = (req, res, next) => {
  res.render("goal", { root: "views", pageTitle: "Cele", goalsList: goals });
};

exports.taskPage = (req, res, next) => {
  taskList.push({
    task: req.body.task,
    date: req.body.date,
    priority: req.body.priority,
  });
  res.redirect("/todolist");
};
exports.deletePage = (req, res, next) => {
  let itemToRemove;
  for (let [index, value] of Object.entries(taskList)) {
    value.task === req.body.taskElement ? (itemToRemove = index) : "";
  }
  taskList.splice(itemToRemove, 1);
  res.redirect("/todolist");
};

exports.newGoal = (req, res, next) => {
  goals.push({
    goal: req.body.goal,
    goalDate: req.body.goalDate,
    progress: "0",
  });
  console.log(goals);
  res.redirect("/goal");
};

exports.editGoal = (req, res, next) => {
  goals.find((el) =>
    el.goal === req.body.taskElement ? (el.progress = req.body.progress) : ""
  );
  res.redirect("/goal");
};
exports.previous = (req, res, next) => {
  newCalendar.previousMonth();
  res.redirect("/calendar");
};

exports.next = (req, res, next) => {
  newCalendar.nextMonth();
  res.redirect("/calendar");
};

exports.eventPage = (req, res, next) => {
  eventList.push({ event: req.body.event, eventDate: req.body.eventDate });
  res.redirect("/calendar");
};

exports.deleteEvent = (req, res, next) => {
  const itemToRemove = eventList.indexOf(req.body.eventText);
  eventList.splice(itemToRemove, 1);
  res.redirect("/calendar");
};

exports.addToSheet = (req, res, next) => {
  sheetsList[req.body.sheets] += req.body.note;
  // console.log(req.body);
  res.redirect("/notes");
};
let seeSheet;
exports.showSheet = (req, res, next) => {
  seeSheet = req.body.sheets;
  res.redirect("/notes");
};

exports.newSheet = (req, res, next) => {
  const newSheet = req.body.sheetName;
  sheetsList[newSheet] = "";
  res.redirect("/notes");
};

let outputetText;

exports.translate = (req, res, next) => {
  translate(req.body.textToTranslate, req.body.toLanguage)
    .then((res) => (outputetText = res.text))
    .then(() => res.redirect("/translate"));
};
exports.translatePage = (req, res, next) => {
  console.log(outputetText);
  res.render("translator", {
    root: "views",
    pageTitle: "Translator",
    translatedText: outputetText,
  });
};
