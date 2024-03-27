const landingPage = (req, res, next) => {
  res.sendFile("landingPage.html", { root: "views" });
};

const loginPage = (req, res, next) => {
  res.sendFile("logowanie.html", { root: "views" });
};

const forgottenPasswordPage = (req, res, next) => {
  res.render("forgottenPassword", {
    root: "views",
    pageTitle: "Zapomniałem Hasło",
  });
};

export {
  forgottenPasswordPage,
  loginPage,
  landingPage,
};
