const loadUsers = (whenUsersLoad,whenFailToLoad) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load',whenUsersLoad);
  xhr.addEventListener('error',whenFailToLoad);
  xhr.open('GET','../db/users.json');
  xhr.send();
};

const loadMessages = (whenMessagesLoad,whenFailToLoad) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load',whenMessagesLoad);
  xhr.addEventListener('error',whenFailToLoad);
  xhr.open('GET','../db/messages.json');
  xhr.send();
};

module.exports = {
  loadUsers,
  loadMessages,
};
