const messages = require('./messages');

const originalMessages = messages.getMessages();

const deleteThisMessage = (e) => {
  console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id);
  const messageSelectedId = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
  originalMessages.forEach((message) => {
    if (message.messageId === messageSelectedId) {
      console.log('message.messageId', message.messageId);
      messages.deleteMessage(message.messageId);
    }
  });
};

module.exports = deleteThisMessage;
