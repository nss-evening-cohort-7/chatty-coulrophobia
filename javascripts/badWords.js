const messages = require('./messages');

const input = document.getElementById('chat-entry');
const badWords = messages.returnBadWords();
const badWordsUsed = [];

const badWordAlertBuilder = () => {
  let output = '';
  for (let i = 0; i < badWordsUsed.length; i++) {
    output += `${badWordsUsed[i]} `;
  }
  return output;
};

const alertUserOfBadWords = () => {
  alert(`You have used some bad words there bucko! Please refrain from using these words: ${badWordAlertBuilder}`);
};

const splitMessageIntoArray = () => {
  return input.toLowerCase().split(' ');
};

const checkForBadWords = () => {
  console.log('check for bad words');
  if (input.length > 0) { // only execute if there is text in the input field
    const splitMessageArray = splitMessageIntoArray();
    splitMessageArray.forEach(message => {
      badWords.forEach(badWord => {
        if (badWord === message) {
          badWordsUsed.push(badWord);
        }
      });
    });
  }

  if (badWordsUsed.length < 0) {
    alertUserOfBadWords();
  }  // only returns bad word array if there are items in it
};

module.exports = checkForBadWords;
