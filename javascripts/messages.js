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

module.exports = {
  setUsers,
  getUsers,
  setMessages,
  getMessages,
};
