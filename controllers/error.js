exports.get404 = (req, res, next) => {
  res.sendFile("404.html", { root: "views" });
};
