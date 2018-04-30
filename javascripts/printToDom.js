const printToDom = (domString, divId) => {
  const outputDiv = document.getElementById(divId);
  const lightTheme = document.getElementById('light-theme');
  const darkTheme = document.getElementById('dark-theme');
  const customBtn = document.getElementById('save-CustomTheme-Btn');
  if (divId === 'message-container') {
    document.getElementById('clear-all').disabled = false;
    if (lightTheme.classList.contains('active')) {
      lightTheme.click();
    } else if (darkTheme.classList.contains('active')) {
      darkTheme.click();
    } else {
      customBtn.click();
      customBtn.blur();
    }
    if (document.getElementById('text-enlarger').classList.contains('active')) {
      [...document.getElementsByTagName('h5'), ...document.getElementsByTagName('h6'),].forEach(element => {
        element.classList.add('msg-large-text');
      });
    }
  }
  let midEdit = false;
  if (document.getElementsByClassName('highlight').length === 1) {
    midEdit = true;
  }
  outputDiv.innerHTML = domString;
  if (outputDiv.scrollHeight - outputDiv.clientHeight > outputDiv.scrollTop + 1 && midEdit === false) {
    outputDiv.scrollTop = outputDiv.scrollHeight - outputDiv.clientHeight;
  }
};

const generateUserList = (users) => {
  let domString = '';
  users.forEach((user) => {
    if (user.id < 6) {
      domString += `<option id='${user.id}'>${user.name}</option>`;
    }
    printToDom(domString, 'user-select');
  });
};

module.exports = {
  printToDom,
  generateUserList,
};
