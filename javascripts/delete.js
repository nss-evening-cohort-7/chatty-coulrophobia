// const messages = require('./messages');

// const originalMessages = messages.getMessages();

const deleteThisMessage = (e) => {
  // console.log(e);
  // btn-message-delete
  // console.log(e.target.classList);
  if (e.target.classList.contains('btn-message-delete')) {
    console.log('DELETE BUTTON CLICKED');
    console.log(e.target.parentNode.parentNode.parentNode.parentNode.id);
  }
  e.stopPropagation();

  // const messageSelectedId = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
  // originalMessages.forEach((message) => {
  //   if (message.messageId === messageSelectedId) {
  //     console.log('message.messageId', message.messageId);
  //     messages.deleteMessage(message.messageId);
  //   }
  // });
};

module.exports = deleteThisMessage;
