const addMessage = require('./add');

let messages = [];
let users = [];
let chatBots = [];
let badWords = [];

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

const newMessage = (botMessage, botUser) => {
  messages.push(addMessage(botMessage, botUser));
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
  setChatBots,
  getChatBots,
  setBadWords,
  returnBadWords,
};
