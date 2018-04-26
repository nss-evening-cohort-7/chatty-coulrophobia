const previewTheme = () => {
  const backgroundChangeBtn = document.getElementById('chng-bkgrd-color').innerHTML;
  const textChangeBtn = document.getElementById('chng-txt-color').innerHTML;
  const previewCntr = document.getElementById('preview');
  previewCntr.style.backgroundColor = `#${backgroundChangeBtn}`;
  previewCntr.style.color = `#${textChangeBtn}`;
};

const applyTheme = () => {
  const backgroundChangeBtn = document.getElementById('chng-bkgrd-color').innerHTML;
  const textChangeBtn = document.getElementById('chng-txt-color').innerHTML;
  const messageContainers = document.getElementsByClassName('message');
  for (let i = 0; i < messageContainers.length; i++) {
    messageContainers[i].style.backgroundColor = `#${backgroundChangeBtn}`;
    messageContainers[i].style.color = `#${textChangeBtn}`;
  };
};

module.exports = {
  previewTheme,
  applyTheme,
};
