var express = require('express');
var path = require('path');
var profiles = require('../data/friends.js');

var router = express.Router();

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
router.get('/api/friends', function(req, res){
    return res.json(profiles);
})

//A POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic.
router.post('/api/friends', function(req, res){
    console.log(req.body);
    var newProfile = req.body;

    matchProfile(newProfile);
    profiles.push(newProfile);

})

function matchProfile(profile) {
    var bestScore = 51, bestMatch;

    for (var i = 0; i < profiles.length; i++) {
        var difference;
        for (var j = 0; j < profiles[i].scores.length; j++) {
            difference = Math.abs(profiles[i].scores[j] - profile.scores[j]);
        }
        if (difference < bestScore) {
            bestScore = difference;
            bestMatch = profiles[i].name;
        }
    }
    console.log('Your best match is ' + bestMatch);
}

module.exports = router;