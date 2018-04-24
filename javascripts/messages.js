let messages = [];
let users = [];

const setMessages = () => {
  const myMessages = JSON.parse(this.responseText);
  messages = myMessages.messages;
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
