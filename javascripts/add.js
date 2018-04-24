let messageIdCounter = 5;

const buildMessage = () => {
  messageIdCounter++;
  const creationTime = new Date();
  const messageObject = {};
  messageObject.createTime = `${creationTime.toLocaleDateString()}, ${creationTime.toLocaleTimeString()}`;
  messageObject.editTime = '';
  messageObject.messageID = messageIdCounter.toString().padStart(5, '0');
  messageObject.message = document.getElementById('chat-entry').value;
  messageObject.userID = document.getElementById('user-select').value;
  return messageObject;
};

module.exports = buildMessage;
