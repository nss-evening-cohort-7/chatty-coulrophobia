let messages = [];

const setMessages = () => {
  myMessages = JSON.parse(this.responseText);
  messages = myMessages.messages;
};

const getMessages = () => {
  return messages;
};

module.exports = {
  setMessages,
  getMessages,
};
