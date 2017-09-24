var path = require("path");

module.exports = function(app) {


  app.get("/display", function(req, res) {
    res.sendFile(path.join(__dirname, "/../index.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../index.html"));
  });
};