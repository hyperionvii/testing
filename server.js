var express = require("express");
var bodyParser = require("body-parser")
var app = express();

var PORT = process.env.PORT || 8080;

var Key = process.env.Key


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('public'))

app.use("/api", require("./routing/apiRoutes.js"));
require("./routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});