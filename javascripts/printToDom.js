const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const generateUserList = (users) => {
  let domString = '';
  users.forEach((user) => {
    domString += `<option id='${user.id}'>${user.name}</option>`;
  });
  printToDom(domString,'user-select');
};

module.exports = {
  printToDom,
  generateUserList,
};
