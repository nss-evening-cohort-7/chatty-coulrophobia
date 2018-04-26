const messages = require('./messages');
const deleteThisMessage = require ('./delete');
const domStringBuilder = require('./domStringBuilder');
const messageBox = document.getElementById('message-container');
const clearAllBtn = document.getElementById('clear-all');

const initializeDeleteBtnListeners = () => {
  document.getElementById('message-container').addEventListener('click', deleteThisMessage);
};

const initializeChatListener = () => {
  const entryField = document.getElementById('chat-entry');
  entryField.addEventListener('keypress', e => {
    if (e.key === 'Enter' && entryField.value) {
      messages.newMessage();
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

module.exports = {
  addClearEvent,
  checkMessageExists,
  initializeChatListener,
  initializeDeleteBtnListeners,
};
