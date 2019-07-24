var express = require("express");
var apiRoutes = require('./app/routing/apiRouting');
var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express();

// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(htmlRoutes);
app.use(apiRoutes);

//start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
