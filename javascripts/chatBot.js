const messages = require('./messages');
const buildString = require('./domStringBuilder');

let getLastMessage = '';

const startReply = () => {
  const timeAmt = Math.floor(Math.random() * 10000) + 1;
  getLastMessage = messages.getMessages()[messages.getMessages().length - 1].message;
  setTimeout(writeReply, timeAmt);
};

const writeReply = () => {
  const chatBotUsers = messages.getChatBots();
  const randomChatbot = Math.floor(Math.random() * Math.floor(chatBotUsers.length));
  const keywords = chatBotUsers[randomChatbot].response.keywords;

  keywords.forEach((word) => {
    if (getLastMessage.toLowerCase().includes(word)) {
      messages.newMessage(chatBotUsers[randomChatbot].response.reply[keywords.indexOf(word)], chatBotUsers[randomChatbot].id);
      buildString.buildDomString();
    };
  });
};

module.exports = {
  startReply,
};
