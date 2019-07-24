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

    var bestMatch = matchProfile(newProfile);
    profiles.push(newProfile);  
    res.json(bestMatch);
})

function matchProfile(profile) {
    var bestScore = 51;
    var bestMatch = {
        name: "",
        imgULR: "",
    }

    for (var i = 0; i < profiles.length; i++) {
        var difference = 0;
        for (var j = 0; j < profiles[i].scores.length; j++) {
            difference += Math.abs(profiles[i].scores[j] - profile.scores[j]);
        }
        //console.log(difference);
        if (difference < bestScore) {
            bestScore = difference;
            bestMatch.name = profiles[i].name;
            bestMatch.imgURL = profiles[i].imgURL;
        }
    }
    console.log('Your best match is ' + bestMatch.name);
    return bestMatch;
}

module.exports = router;