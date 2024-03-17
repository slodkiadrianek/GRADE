const giveData = require("../model/librusApi");
let allDataAboutUser;
let UserData;
exports.postDashboard = (req, res, next) => {
  res.sendFile("dashboard.html", { root: "views" });
  console.log(req.body);
};

exports.landingPage = (req, res, next) => {
  res.sendFile("landingPage.html", { root: "views" });
};

exports.loginPage = (req, res, next) => {
  res.sendFile("logowanie.html", { root: "views" });
};

exports.notesPage = (req, res, next) => {
  res.sendFile("notes.html", { root: "views" });
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
