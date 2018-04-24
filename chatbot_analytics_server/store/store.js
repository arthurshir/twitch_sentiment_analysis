const knex = require('knex')(require('../knexfile'));

exports.createUser = function(username) {
  console.log(`Add user ${username}`)
  return knex('user').insert({
    username
  })
}

exports.userExists = function(username) {
  return new Promise(function(resolve, reject) {
    knex('user')
      .where('username', '=', username)
      .then(function(result) {
        resolve(result.length > 0)
      });
  });
}

exports.incrementUserHappyMessage = function(username) {
  console.log(`Increment happy user ${username}`)
  return new Promise(function(resolve, reject) {
    exports.userExists(username).then(function(result) {
      console.log(result)
      if (result) {
        knex('user')
        .where('username', '=', username)
        .increment('num_happy_messages', 1).then(function(result) {
          resolve(result);
        })
      } else {
        exports.createUser(username).then(() => {
          knex('user')
          .where('username', '=', username)
          .increment('num_happy_messages', 1).then(function(result) {
            resolve(result)
          })
        })
      }
    })
  });
}
exports.incrementUserUnhappyMessage = function(username) {
  console.log(`Increment unhappy user ${username}`)
  return new Promise(function(resolve, reject) {
    exports.userExists(username).then(function(result) {
      console.log(result)
      if (result) {
        knex('user')
        .where('username', '=', username)
        .increment('num_unhappy_messages', 1).then(function(result) {
          resolve(result);
        })
      } else {
        exports.createUser(username).then(() => {
          knex('user')
          .where('username', '=', username)
          .increment('num_unhappy_messages', 1).then(function(result) {
            resolve(result)
          })
        })
      }
    })
  });
}
exports.incrementUserNeutralMessage = function(username) {
  console.log(`Increment unhappy user ${username}`)
  return new Promise(function(resolve, reject) {
    exports.userExists(username).then(function(result) {
      console.log(result)
      if (result) {
        knex('user')
        .where('username', '=', username)
        .increment('num_neutral_messages', 1).then(function(result) {
          resolve(result);
        })
      } else {
        exports.createUser(username).then(() => {
          knex('user')
          .where('username', '=', username)
          .increment('num_neutral_messages', 1).then(function(result) {
            resolve(result)
          })
        })
      }
    })
  });
}

exports.getTopNMostHappyUsers = function(numUsers) {
  return knex('user')
  .orderBy('num_happy_messages', 'desc')
  .limit(numUsers)
}

exports.getTopNMostUnhappyUsers = function(numUsers) {
  return knex('user')
  .orderBy('num_unhappy_messages', 'desc')
  .limit(numUsers);
}