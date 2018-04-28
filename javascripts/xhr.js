const loadUsers = (whenUsersLoad,whenFailToLoad) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', whenUsersLoad);
  xhr.addEventListener('error', whenFailToLoad);
  xhr.open('GET', '../db/users.json');
  xhr.send();
};

const loadMessages = (whenMessagesLoad,whenFailToLoad) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', whenMessagesLoad);
  xhr.addEventListener('error', whenFailToLoad);
  xhr.open('GET', '../db/messages.json');
  xhr.send();
};

const chatBotUsers = (whenChatBotsLoad, whenFailToLoad) => {
  const xhrCB = new XMLHttpRequest();
  xhrCB.addEventListener('load', whenChatBotsLoad);
  xhrCB.addEventListener('error', whenFailToLoad);
  xhrCB.open('GET', '../db/chatbots.json');
  xhrCB.send();
};

const loadBadWords = (whenMessagesLoad,whenFailToLoad) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load',whenMessagesLoad);
  xhr.addEventListener('error',whenFailToLoad);
  xhr.open('GET','../db/badwords.json');
  xhr.send();
};

module.exports = {
  loadUsers,
  loadMessages,
  chatBotUsers,
  loadBadWords,
};
