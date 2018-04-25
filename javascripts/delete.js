const messages = require('./messages');

const originalMessages = messages.getMessages();

const deleteThisMessage = (e) => {
  console.log(e);
  console.log(e.target.parentNode.parentNode.parentNode.parentNode);
  const messageSelected = e.target.parentNode.parentNode.parentNode.parentNode;
  originalMessages.forEach((message) => {
    if (message.messageID === messageSelected) {

      messages.deleteMessage(message.messageID);
    }
  });
};

module.exports = deleteThisMessage;
