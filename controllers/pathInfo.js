const giveData = require("../model/librusApi");
let allDataAboutUser;
let UserData;

const daysInMotnh = require('../model/calendarM')

exports.postDashboard = (req, res, next) => {
  res.render("dashboard", { root: "views",
pageTitle: 'Dashboard' });
};

exports.landingPage = (req, res, next) => {
  res.sendFile("landingPage.html", { root: "views" });
};

exports.loginPage = (req, res, next) => {
  res.sendFile("logowanie.html", { root: "views" });
};

exports.notesPage = (req, res, next) => {
  res.render("notes", { root: "views", pageTitle:'Notes' });
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

exports.todolistPage = (req,res,next) =>{
  res.render('dailytodolist', {root: 'views', pageTitle: 'To do list'})
}
exports.calendarPage = (req,res,next) =>{
  res.render('calendar', {root: 'views',
daysInMonth: daysInMotnh,
pageTitle: 'Kalendarz'})
}

exports.goalPage = (req, res, next) =>{
  res.render('goal', {root:'views', 
pageTitle: 'Cele'})
}