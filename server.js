var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8000;

// For serving of statics CSS
app.use(express.static(__dirname = "/express"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.app+json" }));

// API and HTML routes 
require("./app/routing/apiRoutes.js")(app);
require("./app/roputing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});