var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

var app = express();
var port = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

var routes = require("./routes/burgers_controller");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

// Starting our express app
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + "/public"));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// // override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

// var routes = require("./routes/burgers_controller");

// app.use("/", routes);
// app.use("/update", routes);
// app.use("/create", routes);

// // listen on port 3000
// var port = process.env.PORT || 3000;
// app.listen(port);
