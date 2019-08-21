var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var methodOverride  = require("method-override");


var PORT = process.env.PORT || 8080

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);
app.get('/', (req, res) => {
  res.render('index');
})

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });