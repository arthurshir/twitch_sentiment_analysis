const CreateUser = document.querySelector('.CreateUser')
const IncrementUserUnhappyMessage = document.querySelector('.IncrementUserUnhappyMessage')
const IncrementUserHappyMessage = document.querySelector('.IncrementUserHappyMessage')

CreateUser.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = CreateUser.querySelector('.username').value;
  const password = CreateUser.querySelector('.password').value;
  post('/createUser', { username });
})

IncrementUserUnhappyMessage.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = IncrementUserUnhappyMessage.querySelector('.username').value;
  post('/incrementUserUnhappyMessage', { username });
})

IncrementUserHappyMessage.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = IncrementUserHappyMessage.querySelector('.username').value;
  post('/incrementUserHappyMessage', { username });
})

function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}


    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);