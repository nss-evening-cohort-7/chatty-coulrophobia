const addMessage = require('./add');

let messages = [];
let users = [];

const setMessages = (messageArray) => {
  messages = messageArray.messages;
};

const getMessages = () => {
  return messages;
};

const setUsers = (userArray) => {
  users = userArray;
};

const getUsers = () => {
  return users;
};

const newMessage = () => {
  messages.push(addMessage);
};

module.exports = {
  setUsers,
  getUsers,
  setMessages,
  getMessages,
  newMessage,
};
