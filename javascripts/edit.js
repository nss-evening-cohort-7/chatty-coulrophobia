const getCurrentTime = require('./timestamp');

const retrieveMessage = (e) => {
  if (e.target.classList[2] === 'btn-message-edit') {
    const messageLine = e.target.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[0];
    const lastEditedLine = e.target.parentNode.parentNode.parentNode.children[0].children[0].children[2];
    const originalMessage = messageLine.innerHTML;
    // add anchor for message to be written back
    messageLine.parentNode.id = 'message-back';
    lastEditedLine.id = 'last-edited-back';
    const chatEntry = document.getElementById('chat-entry');

    chatEntry.value = originalMessage;
  };
};

const reprintMessage = () => {
  let editedMessage = document.getElementById('chat-entry').value;
  const lastEditedTime = getCurrentTime();

  if (editedMessage) {
    document.getElementById('message-back').innerHTML = `<h5>${editedMessage}</h5>`;
    document.getElementById('last-edited-back').innerHTML = `<h6><strong>Last edited: </strong>${lastEditedTime}</h6>`;
    editedMessage = '';
  };
};

module.exports = {
  retrieveMessage,
  reprintMessage,
};
