const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

module.exports = printToDom;
