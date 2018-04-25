const messages = require('./messages');

let originalMessages = messages.getMessages();

const deleteThisMessage = (e) => {
  originalMessages.forEach((message) => {
    if (message.messageID === e.target.id) {

    }
  });
};

module.exports = ;
