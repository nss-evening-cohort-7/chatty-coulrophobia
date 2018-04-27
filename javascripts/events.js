const edit = require('./edit');
const messages = require('./messages');
const deleteThisMessage = require ('./delete');
const domStringBuilder = require('./domStringBuilder');
const themes = require ('./themes');

const messageBox = document.getElementById('message-container');
const clearAllBtn = document.getElementById('clear-all');

const initializeDeleteBtnListeners = () => {
  document.getElementById('message-container').addEventListener('click', deleteThisMessage);

};

const checkAddOrEdit = (entryField) => {
  const editOn = document.getElementsByClassName('highlight')[0];
  if (!editOn) {
    messages.newMessage();
    domStringBuilder();
    entryField.value = '';
  } else {
    edit.reprintMessage();
    domStringBuilder();
    entryField.value = '';
  };
};

const initializeChatListener = () => {
  const entryField = document.getElementById('chat-entry');
  entryField.addEventListener('keypress', e => {
    if (e.key === 'Enter' && entryField.value) {
      checkAddOrEdit(entryField);
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
  messages.resetMessages();
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

const addChngColorEvent = () => {
  const previewBtn = document.getElementById('preview-btn');
  previewBtn.addEventListener('click', themes.previewTheme);
  const saveTheme = document.getElementById('save-CustomTheme-Btn');
  saveTheme.addEventListener('click', themes.applyTheme);
};

module.exports = {
  addClearEvent,
  checkMessageExists,
  addEditEvent,
  initializeChatListener,
  initializeDeleteBtnListeners,
  addChngColorEvent,
};
