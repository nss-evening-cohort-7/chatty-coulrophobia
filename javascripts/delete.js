const messages = require('./messages');

const originalMessages = messages.getMessages();

const deleteThisMessage = (e) => {
  const messageSelectedId = e.target.parentNode.parentNode.parentNode.parentNode.target.id;
  originalMessages.forEach((message) => {
    if (message.messageID === messageSelectedId) {
      messages.deleteMessage(message.messageID);
    }
  });
};

module.exports = deleteThisMessage;
