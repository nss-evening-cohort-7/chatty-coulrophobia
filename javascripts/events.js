const edit = require('./edit');
const messages = require('./messages');
const deleteThisMessage = require ('./delete');
const stringBuilder = require('./domStringBuilder');
const themes = require('./themes');
const checkForBadWords = require('./badWords');
const chatBot = require('./chatBot');

const messageBox = document.getElementById('message-container');
const clearAllBtn = document.getElementById('clear-all');

const initializeDeleteBtnListeners = () => {
  document.getElementById('message-container').addEventListener('click', deleteThisMessage);
};

const checkAddOrEdit = (entryField) => {
  const editOn = document.getElementsByClassName('highlight').length;
  if (editOn) {
    edit.reprintMessage();
    stringBuilder.buildDomString();
    entryField.value = '';
  } else {
    messages.newMessage();
    stringBuilder.buildDomString();
    checkForBadWords();
    entryField.value = '';
    chatBot.startReply();
  }
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
  clearAllBtn.addEventListener('click', clearAll);
};

const addEditEvent = () => {
  messageBox.addEventListener('click', edit.retrieveMessage);
};

const addChngColorEvent = () => {
  const previewBtn = document.getElementById('preview-btn');
  previewBtn.addEventListener('click', themes.previewTheme);
  const saveTheme = document.getElementById('save-CustomTheme-Btn');
  saveTheme.addEventListener('click', themes.applyTheme);
};

const addChangeThemeEvent = () => {
  const darkThemeBtn = document.getElementById('dark-theme');
  darkThemeBtn.addEventListener('click',themes.applyTheme);
  const lightThemeBtn = document.getElementById('light-theme');
  lightThemeBtn.addEventListener('click',themes.applyTheme);
};

const addLargeTextButtonEvent = () => {
  document.getElementById('text-enlarger').addEventListener('click', e => {
    const h5andh6 = [...document.getElementsByTagName('h5'), ...document.getElementsByTagName('h6'),];
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
      h5andh6.forEach(element => {
        element.classList.remove('msg-large-text');
      });
    } else {
      e.target.classList.add('active');
      h5andh6.forEach(element => {
        element.classList.add('msg-large-text');
      });
    }
  });
};

module.exports = {
  addClearEvent,
  checkMessageExists,
  addEditEvent,
  initializeChatListener,
  initializeDeleteBtnListeners,
  addChngColorEvent,
  addChangeThemeEvent,
  addLargeTextButtonEvent,
  // chatListenerButton,
};
