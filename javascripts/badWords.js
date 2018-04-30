const messages = require('./messages');

let input = '';
let badWords = [];
let badWordsUsed = [];

const filterDuplicates = () => [ ...new Set(badWordsUsed),];

const badWordAlertBuilder = () => {
  let output = '';
  const uniqueBadwords = filterDuplicates();
  for (let i = 0; i < uniqueBadwords.length; i++) {
    output += `${uniqueBadwords[i]} `;
  }
  return output;
};

const alertUserOfBadWords = () => {
  alert(`Did yer' Momma teach you those words?! Please refrain from using these words: ${badWordAlertBuilder()}`);
  badWordsUsed = []; // reset array to empty after alerting the user
};

const splitMessageIntoArray = () => {
  return input.toLowerCase().split(' ');
};

const checkForBadWords = () => {
  input = document.getElementById('chat-entry').value;
  badWords = messages.returnBadWords();
  if (input.length > 0) { // only execute if there is text in the input field
    const splitMessageArray = splitMessageIntoArray();
    // this loops through both arrays and matches bad words entered by user
    splitMessageArray.forEach(message => {
      badWords.forEach(badWord => {
        if (badWord.badWord === message) {
          badWordsUsed.push(badWord.badWord);
        }
      });
    });
  }

  if (badWordsUsed.length > 0) {
    alertUserOfBadWords();
    return true;
  }  else {
    return false;
  }// only returns bad word array if there are items in it
};

module.exports = checkForBadWords;
