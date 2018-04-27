const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
  document.getElementById('save-CustomTheme-Btn').click();
  if (document.getElementById('text-enlarger').classList.contains('active')) {
    [...document.getElementsByTagName('h5'), ...document.getElementsByTagName('h6'),].forEach(element => {
      element.classList.add('msg-large-text');
    });
  }
};

const generateUserList = (users) => {
  let domString = '';
  users.forEach((user) => {
    domString += `<option id='${user.id}'>${user.name}</option>`;
  });
  printToDom(domString, 'user-select');
};

module.exports = {
  printToDom,
  generateUserList,
};
