var request = require('request');
var config = require('./config');

exports.incrementUserUnhappyMessage = function(username) {
  request.post({
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    url: config.chatbot_analytics_server_url + '/incrementUserUnhappyMessage',
    body: JSON.stringify({
      username: username
    })
  }, function(error, response, body){
    console.log(body);
  });
}

exports.incrementUserHappyMessage = function(username) {
  request.post({
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    url: config.chatbot_analytics_server_url + '/incrementUserHappyMessage',
    body: JSON.stringify({
      username: username
    })
  }, function(error, response, body){
    console.log(body);
  });
}

exports.incrementUserNeutralMessage = function(username) {
  request.post({
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    url: config.chatbot_analytics_server_url + '/incrementUserNeutralMessage',
    body: JSON.stringify({
      username: username
    })
  }, function(error, response, body){
    console.log(body);
  });
}
