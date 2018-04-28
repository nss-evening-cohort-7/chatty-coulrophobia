const messages = require('./messages');

let input = '';
let badWords = [];
let badWordsUsed = [];

const badWordAlertBuilder = () => {
  let output = '';
  for (let i = 0; i < badWordsUsed.length; i++) {
    if (badWordsUsed.indexOf(badWordsUsed[i])) {

    } else {
      output += `${badWordsUsed[i]} `;
    }
  }
  console.log(output);
  return output;
};

const alertUserOfBadWords = () => {
  alert(`Did yer' Momma teach you those words?! Please refrain from using these words: ${badWordAlertBuilder()}`);
  badWordsUsed = [];
};

const splitMessageIntoArray = () => {
  return input.toLowerCase().split(' ');
};

const checkForBadWords = () => {
  input = document.getElementById('chat-entry').value;
  badWords = messages.returnBadWords();
  if (input.length > 0) { // only execute if there is text in the input field
    const splitMessageArray = splitMessageIntoArray();
    // console.log(splitMessageArray);
    // console.log(badWords);
    splitMessageArray.forEach(message => {
      badWords.forEach(badWord => {
        if (badWord.badWord === message) {
          badWordsUsed.push(badWord.badWord);
          console.log('first function', badWordsUsed);
        }
      });
    });
  }

  if (badWordsUsed.length > 0) {
    alertUserOfBadWords();
  }  // only returns bad word array if there are items in it
};

module.exports = checkForBadWords;
