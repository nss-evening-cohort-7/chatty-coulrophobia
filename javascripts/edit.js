const getCurrentTime = require('./timestamp');
const messageArray = require('./messages');

let messageId = '';

const focusInputField = (chatEntry) => {
  chatEntry.focus();
};

const highlightMessageBeingEdited = (e) => {
  removeHighlight();
  if (e.target.classList.contains('btn-message-edit')) {
    const individualMessageBox = e.target.parentNode.parentNode.parentNode.parentNode;
    individualMessageBox.classList.add('highlight');
  } else if (e.target.classList.contains('glyphicon')) {
    const individualMessageBox = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    individualMessageBox.classList.add('highlight');
  };
};

const removeHighlight = () => {
  const highlightedMessages = document.getElementsByClassName('highlight');
  for (let i = 0; i < highlightedMessages.length; i++) {
    highlightedMessages[i].classList.remove('highlight');
  };
};

const retrieveMessage = (e) => {
  if (e.target.classList.contains('btn-message-edit')) {
    const messageLine = e.target.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[0];
    messageId = e.target.parentNode.parentNode.parentNode.parentNode.id;
    const originalMessage = messageLine.innerHTML;
    const chatEntry = document.getElementById('chat-entry');
    chatEntry.value = originalMessage;
    focusInputField(chatEntry);
    highlightMessageBeingEdited(e);
  } else if (e.target.classList.contains('glyphicon')) {
    const messageLine = e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[0];
    messageId = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    const originalMessage = messageLine.innerHTML;
    const chatEntry = document.getElementById('chat-entry');
    chatEntry.value = originalMessage;
    focusInputField(chatEntry);
    highlightMessageBeingEdited(e);
  };
};

const reprintMessage = () => {
  const editedMessage = document.getElementById('chat-entry').value;
  const lastEditedTime = getCurrentTime();
  const allMessages = messageArray.getMessages();

  for (let i = 0; i < allMessages.length; i++) {
    if (allMessages[i].messageId * 1 === messageId * 1) {
      allMessages[i].message = editedMessage;
      allMessages[i].editTime = lastEditedTime;
    };
  };
};

module.exports = {
  retrieveMessage,
  reprintMessage,
};
