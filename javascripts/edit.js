const retrieveMessage = (e) => {
  if (e.target.classList[2] === 'btn-message-edit') {
    const originalMessage = e.target.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[0].innerHTML;
    const chatEntry = document.getElementById('chat-entry');

    chatEntry.value = originalMessage;
  };
};

const editMessage = (e) => {
  retrieveMessage(e);
};

module.exports = editMessage;
