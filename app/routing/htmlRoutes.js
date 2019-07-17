var express = require("express");
var path = require("path");

var router = express.Router();

// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/../public', "home.html"));
});
// /A GET Route to /survey which should display the survey page.
router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + '/../public', 'survey.html'));
})

/*A default, catch-all route that leads to home.html which displays the home page.
router.use(function(req, res){
    res.sendFile(path.join(__dirname + '/../public', "home.html"));
});*/
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

module.exports = router;