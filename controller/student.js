const path = require("path");

const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
};

const aboutPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "about.html"));
};

module.exports = {
  homePage,
  aboutPage,
};
