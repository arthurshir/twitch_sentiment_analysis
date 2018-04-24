var request = require('request');
const chatbot_analytics_server_url = 'http://localhost:7555';

exports.incrementUserUnhappyMessage = function(username) {
  request.post({
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    url:     chatbot_analytics_server_url + '/incrementUserUnhappyMessage',
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
    url:     chatbot_analytics_server_url + '/incrementUserHappyMessage',
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
    url:     chatbot_analytics_server_url + '/incrementUserNeutralMessage',
    body: JSON.stringify({
      username: username
    })
  }, function(error, response, body){
    console.log(body);
  });
}