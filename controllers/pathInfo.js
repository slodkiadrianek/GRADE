let logData;

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
  res.sendFile("librusDashboard.html", { root: "views" });
};
