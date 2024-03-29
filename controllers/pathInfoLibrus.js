import giveData from "../model/librusApi.js";
import calendarMoves from "../model/calendarM.js";
import findById from "../model/grade.js";
let allDataAboutUser;
let UserData;
let messageData;
import getDate from "../model/calendarLibrusM.js";
const newCalendar = new calendarMoves();
newCalendar.getActualDate();
const getActualDate = new getDate();
getActualDate.getActualDate();
const librusDashboard = (req, res, next) => {
  const newStudent = new giveData(req.body.login, req.body.password);
  newStudent
    .showData(req.body.login, req.body.password)
    .then((data) => {
      allDataAboutUser = data; // Tutaj otrzymasz wszystkie dane
    })
    .then(() =>
      allDataAboutUser.accountInfo.then((accInfo) => (UserData = accInfo))
    )
    .then(() => {
      res.render("librus/librusDashboard", {
        root: "views",
        notifications: allDataAboutUser.notifications,
        luckyNumber: allDataAboutUser.luckyNumber,
        calendar: allDataAboutUser.calendar,
        accInfo: UserData,
        pageTitle: "Librus Dashboard",
      });
    });
};
const gradesPage = (req, res, next) => {
  res.render("librus/grades", {
    root: "views",
    pageTitle: "Oceny",
    grades: allDataAboutUser.grades,
  });
};

const calendarLibrusPage = (req, res, next) => {
  res.render("librus/calendarLibrus", {
    root: "views",
    pageTitle: "Terminarz",
    year: getActualDate.actualYear,
    month: getActualDate.actualMonth,
    daysInMonth: getActualDate.daysInMonth,
    day: getActualDate.actualDay,
    eventList: allDataAboutUser.calendar,
  });
};
const annoucmentsPage = (req, res, next) => {
  res.render("librus/annoucments", {
    root: "views",
    annoucment: allDataAboutUser.announcements,
    pageTitle: "Ogłoszenia",
  });
};

const homeworkPage = (req, res, next) => {
  res.render("librus/homework", {
    root: "views",
    pageTitle: "Zadania",
    homeworkList: allDataAboutUser.homework,
  });
};
const absencesPage = (req, res, next) => {
  res.render("librus/absences", {
    root: "views",
    pageTitle: "Obecność",
    absencesList: allDataAboutUser.absences,
  });
};
const messagePage = (req, res, next) => {
  res.render("librus/messages", {
    root: "views",
    pageTitle: "wiadomości",
    messagesList: allDataAboutUser.info,
  });
};

const gradePage = (req, res, next) => {
  const gradeId = req.params.gradeId;
  const gradeEl = findById(allDataAboutUser.grades, gradeId);
  res.render("librus/grade", {
    root: "views",
    pageTitle: "Ocena",
    grade: gradeEl,
  });
};

export {
  messagePage,
  absencesPage,
  homeworkPage,
  annoucmentsPage,
  calendarLibrusPage,
  gradesPage,
  librusDashboard,
  gradePage,
};
