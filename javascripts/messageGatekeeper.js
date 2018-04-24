const xhr = require('./xhr');
const messages = require('./messages');
const printToDom = require('./printToDom');

const whenUsersLoad = function () {
  const usersData = JSON.parse(this.responseText).users;
  messages.setUsers(usersData);
  printToDom.generateUserList(messages.getUsers());
};

const whenMessagesLoad = function () {
  const myMessages = JSON.parse(this.responseText);
  messages.setMessages(myMessages);
};

const whenFailToLoad = function () {
  console.error('XHR Fails~~~~!!!');
};

const initializer = () => {
  xhr.loadUsers(whenUsersLoad, whenFailToLoad);
  xhr.loadMessages(whenMessagesLoad, whenFailToLoad);
};

module.exports = initializer;
