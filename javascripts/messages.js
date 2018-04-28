const addMessage = require('./add');

let messages = [];
let users = [];
let chatBots = [];

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

const setChatBots = (chatBotsData) => {
  chatBots = chatBotsData.chatbot;
};

const getChatBots = () => {
  return chatBots;
};

const newMessage = () => {
  messages.push(addMessage());
};

module.exports = {
  setUsers,
  getUsers,
  setMessages,
  getMessages,
  newMessage,
  deleteMessage,
  resetMessages,
  setChatBots,
  getChatBots,
};
