let messageIdCounter = 5;

const timestamp = require('./timestamp');

const buildMessage = (botMessage, botUser) => {
  messageIdCounter++;
  const messageObject = {};
  messageObject.createTime = timestamp();
  messageObject.editTime = '';
  messageObject.messageId = messageIdCounter.toString().padStart(5, '0');
  messageObject.message = botMessage ? botMessage : document.getElementById('chat-entry').value;
  botUser ? messageObject.userId = botUser : [...document.getElementById('user-select').children,].forEach(element => {
    if (element.selected) {
      messageObject.userId = element.id;
    }
  });
  return messageObject;
};

module.exports = buildMessage;
