const addMessage = require('./add');

let messages = [];
let users = [];
const badWords = [];

const resetMessages = () => {
  messages = [];
};

const setMessages = (messageArray) => {
  messages = messageArray.messages;
};

const getMessages = () => {
  return messages;
};

const deleteMessage = arrayPosition => {
  messages.splice(arrayPosition, 1);
};

const setUsers = (userArray) => {
  users = userArray;
};

const getUsers = () => {
  return users;
};

const newMessage = () => {
  messages.push(addMessage());
};

const setBadWords = (input) => {
  badWords = input;
};

const returnBadWords = () => badWords;

module.exports = {
  setUsers,
  getUsers,
  setMessages,
  getMessages,
  newMessage,
  deleteMessage,
  resetMessages,
};
