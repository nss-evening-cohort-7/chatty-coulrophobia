const messages = require('./messages');
const stringBuilder = require('./domStringBuilder');

// identify the message clicked with the matching message in the array
const matchMessages = id => {
  const originalMessages = messages.getMessages();
  for (let i = 0; i < originalMessages.length; i++) {
    if (originalMessages[i].messageId === id) {
      messages.deleteMessage(i);
      stringBuilder.buildDomString();
    }
  }
};

// takes in an event & determines if its the 'delete' button & the message id value
const deleteThisMessage = (e) => {
  let messageId = -999;
  if (e.target.classList.contains('btn-message-delete')) {
    messageId = e.target.parentNode.parentNode.parentNode.parentNode.id;
    matchMessages(messageId);
  }
  e.stopPropagation();
};

module.exports = deleteThisMessage;
