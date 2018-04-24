const express = require('express');
const bodyParser = require('body-parser');
const store = require('./store/store');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/createUser', (req, res) => {
  console.log(req.body.username);
  store
    .createUser(req.body.username)
    .then(() => res.sendStatus(200))
})

app.post('/incrementUserHappyMessage', (req, res) => {
  console.log(req.body.username);
  store
    .incrementUserHappyMessage(req.body.username)
    .then(() => res.sendStatus(200))
})

app.post('/incrementUserUnhappyMessage', (req, res) => {
  console.log(req.body.username);
  store
    .incrementUserUnhappyMessage(req.body.username)
    .then(() => res.sendStatus(200))
})

app.post('/incrementUserNeutralMessage', (req, res) => {
  console.log(req.body.username);
  store
    .incrementUserNeutralMessage(req.body.username)
    .then(() => res.sendStatus(200))
})

app.get('/getMostHappyUsers', (req, res) => {
  store.getTopNMostHappyUsers(3).then(function(results) {
    res.json(results);
  });
})

app.get('/getMostUnhappyUsers', (req, res) => {
  store.getTopNMostUnhappyUsers(3).then(function(results) {
    res.json(results);
  });
})

app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})