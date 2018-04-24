const edit = require('./edit');

const messageBox = document.getElementById('message-container');
const clearAllBtn = document.getElementById('clear-all');

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
  const editBtn = document.getElementsByClassName('btn-message-edit')[0];
  editBtn.addEventListener('click',edit);
};

module.exports = {
  addClearEvent,
  checkMessageExists,
  addEditEvent,
};
