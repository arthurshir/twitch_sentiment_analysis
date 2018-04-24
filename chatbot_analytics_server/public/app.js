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