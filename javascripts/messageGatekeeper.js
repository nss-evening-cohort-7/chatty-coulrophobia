const xhr = require('./xhr');
const messages = require('./messages');
const printToDom = require('./printToDom');
const events = require('./events');

const whenUsersLoad = function () {
  const usersData = JSON.parse(this.responseText).users;
  messages.setUsers(usersData);
  printToDom.generateUserList(messages.getUsers());
};

const whenMessagesLoad = function () {
  const myMessages = JSON.parse(this.responseText);
  messages.setMessages(myMessages);
};

const whenFailToLoad = function () {
  console.error('XHR Fails~~~~!!!');
};

const initializer = () => {
  xhr.loadUsers(whenUsersLoad, whenFailToLoad);
  xhr.loadMessages(whenMessagesLoad, whenFailToLoad);
  events.checkMessageExists();
  events.addClearEvent();
  events.addEditEvent();
  events.initializeChatListener();
  events.addChngColorEvent();

  $('.picker').lsxEmojiPicker({
    twemoji: false,
    onSelect: function (emoji) {
      document.getElementById('chat-entry').value +=
        [
          ...document.getElementsByTagName('span'),
        ].filter(element => {
          return element.title === emoji.name;
        })[0].innerText;
    },
  });
  document.getElementsByClassName('lsx-emojipicker-container')[0].style.top = '5px';
};

module.exports = initializer;
