export default  (req, res, next) => {
  res.sendFile("404.html", { root: "views" });
};
