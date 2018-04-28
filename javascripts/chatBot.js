const messages = require('./messages');
const add = require('./add');

const startReply = () => {
  const timeAmt = Math.floor(Math.random() * 10000) + 1;
  setTimeout(writeReply, timeAmt);
};

const writeReply = () => {
  const chatBotUsers = messages.getChatBots();
  const getLastMessage = messages.getMessages().pop().message;
  const randomChatbot = Math.floor(Math.random() * Math.floor(chatBotUsers.length));
  const keywords = chatBotUsers[randomChatbot].response.keywords;

  keywords.forEach((word) => {
    const foundWordIndex = getLastMessage.indexOf(word);
    if (foundWordIndex > -1) {
      document.getElementById('chat-entry').value = chatBotUsers[randomChatbot].response.reply[keywords.indexOf(word)];
      document.getElementById('user-select').value = chatBotUsers[randomChatbot].name;
    };
  });
  const chatMessage = add.messageBuilder();
  console.log(chatMessage);
};

module.exports = {
  startReply,
};
