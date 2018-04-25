const getCurrentTime = require('./timestamp');

const focusInputField = (chatEntry) => {
  chatEntry.focus();
};

const highlightMessageBeingEdited = (e) => {
  const individualMessageBox = e.target.parentNode.parentNode.parentNode.parentNode;
  individualMessageBox.classList.add('highlight');
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
    const lastEditedLine = e.target.parentNode.parentNode.parentNode.children[0].children[0].children[2];
    const originalMessage = messageLine.innerHTML;
    // add anchor for message to be written back
    messageLine.parentNode.id = 'message-back';
    lastEditedLine.id = 'last-edited-back';
    const chatEntry = document.getElementById('chat-entry');
    chatEntry.value = originalMessage;
    focusInputField(chatEntry);
    highlightMessageBeingEdited(e);
  };
};

const reprintMessage = () => {
  const editedMessage = document.getElementById('chat-entry').value;
  const lastEditedTime = getCurrentTime();

  if (editedMessage) {
    const message = document.getElementById('message-back');
    const editedTime = document.getElementById('last-edited-back');
    message.innerHTML = `<h5>${editedMessage}</h5>`;
    editedTime.innerHTML = `<h6><strong>Last edited: </strong>${lastEditedTime}</h6>`;

    document.getElementById('chat-entry').value = '';
    message.id = '';
    editedTime.id = '';

    removeHighlight();
  };
};

module.exports = {
  retrieveMessage,
  reprintMessage,
};
