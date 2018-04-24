const messages = require('./messages');
const printToDom = require('./printToDom');

const buildDomString = () => {
  const last20messages = messages.getMessages().slice(-20);
  let domString = '';
  for (let i = 0; i < last20messages.length; i++) {
    domString += `<div class='message' id='${last20messages.messageId}'>`;
    domString +=         `<div class='row'>`;
    domString +=           `<div class='col-sm-10'>`;
    domString += `<div class='row message-padding-left'>`;
    domString +=               `<div class='col-sm-5'><h5><strong>From: </strong>${getUserName(last20messages[i].userId)}</h5></div>`;
    domString +=               `<div class='col-sm-3'><h6><strong>At: </strong>${last20messages[i].timestampCreated}</h6></div>`;
    domString +=               `<div class='col-sm-4'><h6><strong>Last edited: </strong>${last20messages[i].timestampEdited}</h6></div>`;
    domString +=             `</div>`;
    domString +=             `<div class='row message-padding-left'>`;
    domString +=                `<div class='col-sm-12'><h5>${last20messages[i].message}</h5></div>`;
    domString +=                 `</div>`;
    domString +=               `<div class='row'>`;
    domString +=             `</div>`;
    domString +=           `</div>`;
    domString +=         `<div class='col-sm-2'>`;
    domString +=           `<div class ='col-sm-12 text-right'>`;
    domString +=             `<button class='btn btn-primary btn-message-edit'><span class='>glyphicon glyphicon-pencil'></span></button>`;
    domString += `<button class='btn btn-danger btn-message-delete'><span class='glyphicon glyphicon-trash'></span></button>`;
    domString +=           `</div>`;
    domString +=         `</div>`;
    domString +=       `</div>`;
  };
  printToDom(domString, 'message-container');
};

const getUserName = (userId) => {
  const users = messages.getUsers();
  users.forEach((user) => {
    if (userId === user.id) {
      return user.name;
    };
  });
};

module.exports = buildDomString;
