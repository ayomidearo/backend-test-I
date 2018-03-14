var config = require('./config/config');
var Twit = require('twit');
var readline = require('readline');
var appService = require('./service/AppService');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var T = new Twit({
    consumer_key:         config.CONSUMER_KEY,
    consumer_secret:      config.CONSUMER_SECRET,
    access_token:         config.ACCESS_TOKEN,
    access_token_secret:  config.ACCESS_TOKEN_SECRET
});

rl.question("Please input hashtags separated by commas: ", function (answer) {

    console.log("I'm now listening for tweets on the following hashtags:  " + answer);

    var tags = answer.split(',');
    var stream = T.stream('statuses/filter', { track: tags });
    stream.on('tweet', function (tweet) {
        appService.processTweet(tweet);
    });
});

