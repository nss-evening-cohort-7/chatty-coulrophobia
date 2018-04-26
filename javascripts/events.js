const edit = require('./edit');
const messages = require('./messages');
const domStringBuilder = require('./domStringBuilder');
const messageBox = document.getElementById('message-container');
const clearAllBtn = document.getElementById('clear-all');

const initializeChatListener = () => {
  const entryField = document.getElementById('chat-entry');
  entryField.addEventListener('keypress', e => {
    if (e.key === 'Enter' && entryField.value) {
      messages.newMessage();
      edit.reprintMessage();
      domStringBuilder(messages.getMessages());
      entryField.value = '';
    }
  });
};

const disableBtn = () => {
  clearAllBtn.disabled = true;
};

const enableBtn = () => {
  clearAllBtn.disabled = false;
};

const checkMessageExists = () => {
  if (messageBox.childNodes[0]) {
    enableBtn();
  } else {
    disableBtn();
  };
};

const clearAll = () => {
  messageBox.innerHTML = '';
  checkMessageExists();
};

const addClearEvent = () => {
  const clearAllBtn = document.getElementById('clear-all');
  clearAllBtn.addEventListener('click',clearAll);
};

const addEditEvent = () => {
  messageBox.addEventListener('click',edit.retrieveMessage);
};

module.exports = {
  addClearEvent,
  checkMessageExists,
  addEditEvent,
  initializeChatListener,
};
