let messageIdCounter = 5;

const timestamp = require('./timestamp');

const buildMessage = () => {
  messageIdCounter++;
  const messageObject = {};
  messageObject.createTime = timestamp();
  messageObject.editTime = '';
  messageObject.messageId = messageIdCounter.toString().padStart(5, '0');
  messageObject.message = document.getElementById('chat-entry').value;
  [...document.getElementById('user-select').children,].forEach(element => {
    if (element.selected) {
      messageObject.userId = element.id;
    }
  });
  return messageObject;
};

module.exports = buildMessage;
