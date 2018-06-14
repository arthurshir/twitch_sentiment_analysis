var tmi = require('tmi.js');
var ibm_sentiment = require("./sentiment_analysis/ibm_sentiment.js");
var analytics_server_requests = require("./analytics_server_requests.js");
var basic_sentiment_analysis = require("./sentiment_analysis/basic_sentiment_analysis.js");
var config = require('./config');

var client = new tmi.client(config.twitch);
client.connect();

client.on("chat", function(channel, user, message, self) {

  // If message is not in format of "[<username>]: <message>", ignore it
  if (message.indexOf("]") != -1) {
    var username = message.slice(1, message.indexOf("]"));
    var cleaned_message = message.slice(message.indexOf("]"));

    var textToAnalyze = cleaned_message;
    ibm_sentiment.run_analysis(textToAnalyze).then((results) =>
      {
        var anger_score = results.document_tone.tone_categories[0].tones[0].score;
        var joy_score = results.document_tone.tone_categories[0].tones[3].score;
        var emotion_catetory = basic_sentiment_analysis.categorize_emotion(anger_score, joy_score);
        if (emotion_catetory == 1) {
          analytics_server_requests.incrementUserUnhappyMessage(username);
        } else if (emotion_catetory == 2) {
          analytics_server_requests.incrementUserHappyMessage(username);
        } else {
          analytics_server_requests.incrementUserNeutralMessage(username);
        }
      }
     ).catch((error) => console.log("error" + error.message));
  }
});