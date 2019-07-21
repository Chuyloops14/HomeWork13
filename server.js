var expres = required("express");
var bodyParser = required("body-parser");
var path = require("path");

var app = express();
 var PORT = process.env.PORT || 8080;

 // For serving of statistic CSS

 app.use(express.static(_dirname = "app/css"));

 app.use( express)