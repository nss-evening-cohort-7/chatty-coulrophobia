let messageIdCounter = 5;

const timestamp = require('./timestamp');

const buildMessage = () => {
  messageIdCounter++;
  const messageObject = {};
  messageObject.createTime = timestamp();
  messageObject.editTime = '';
  messageObject.messageID = messageIdCounter.toString().padStart(5, '0');
  messageObject.message = document.getElementById('chat-entry').value;
  switch (document.getElementById('user-select').value) {
    case 'Bozo':
      messageObject.userId = '1';
      break;
    case 'Krusty':
      messageObject.userId = '2';
      break;
    case 'Chuckles':
      messageObject.userId = '3';
      break;
    case 'Dottie':
      messageObject.userId = '4';
      break;
    case 'Pennywise':
      messageObject.userId = '5';
      break;
  }
  return messageObject;
};

module.exports = buildMessage;
