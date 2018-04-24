const messages = require('./messages');

const messageBox = document.getElementById('message-container');
const clearAllBtn = document.getElementById('clear-all');

const initializeChatListener = () => {
  document.getElementById('chat-entry').addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      messages.newMessage();
      console.log(messages.getMessages());
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
};
