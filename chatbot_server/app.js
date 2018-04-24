var tmi = require('tmi.js');
var ibm_sentiment = require("./sentiment/ibm_sentiment.js");
var analytics_server_requests = require("./analytics_server_requests.js");
var basic_sentiment_analysis = require("./sentiment/basic_sentiment_analysis.js");

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "Fantaandcrackers",
    password: "oauth:a0ah51hhza2rffjkyia0i9zc3n9cdv"
  },
  channels: ["fantaandcrackers"]
};

var params = {
  "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
  "use_unauthenticated": false,
  "username": "4753e610-d3a2-4e22-8514-755f1185ae14",
  "password": "eMcTbkAQN8sQ",
  "textToAnalyze": "test text"
}

var client = new tmi.client(options);
client.connect();

client.on("chat", function(channel, user, message, self) {

  // If message is not in format of "[<username>]: <message>", ignore it
  if (message.indexOf("]") != -1) {
    var username = message.slice(1, message.indexOf("]"));
    var cleaned_message = message.slice(message.indexOf("]"));

    params.textToAnalyze = cleaned_message;
    ibm_sentiment.run_analysis(params).then((results) =>
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

client.on("connected", function(address, port) {
});