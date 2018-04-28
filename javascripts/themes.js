const previewTheme = () => {
  const backgroundChangeBtn = document.getElementById('chng-bkgrd-color').innerHTML;
  const textChangeBtn = document.getElementById('chng-txt-color').innerHTML;
  const previewCntr = document.getElementById('preview');
  previewCntr.style.backgroundColor = `#${backgroundChangeBtn}`;
  previewCntr.style.color = `#${textChangeBtn}`;
};

const applyTheme = (e) => {
  const messageContainers = document.getElementsByClassName('message');
  const darkBtn = document.getElementById('dark-theme');
  const lightBtn = document.getElementById('light-theme');
  const customBtn = document.getElementById('custom-theme');
  if (e.target.id === 'dark-theme') {
    customBtn.classList.remove('active');
    lightBtn.classList.remove('active');
    e.target.classList.add('active');
    for (let i = 0; i < messageContainers.length; i++) {
      messageContainers[i].style.backgroundColor = `DarkGray`;
      messageContainers[i].style.color = `White`;
    };
  } else if (e.target.id === 'light-theme') {
    customBtn.classList.remove('active');
    darkBtn.classList.remove('active');
    e.target.classList.add('active');
    for (let i = 0; i < messageContainers.length; i++) {
      messageContainers[i].style.backgroundColor = `#eeeeee`;
      messageContainers[i].style.color = `#000000`;
    };
  } else {
    const backgroundChangeBtn = document.getElementById('chng-bkgrd-color').innerHTML;
    const textChangeBtn = document.getElementById('chng-txt-color').innerHTML;
    lightBtn.classList.remove('active');
    darkBtn.classList.remove('active');
    customBtn.classList.add('active');
    customBtn.blur();
    for (let i = 0; i < messageContainers.length; i++) {
      messageContainers[i].style.backgroundColor = `#${backgroundChangeBtn}`;
      messageContainers[i].style.color = `#${textChangeBtn}`;
    };
  };
  e.target.blur();
  customBtn.blur();
};

module.exports = {
  previewTheme,
  applyTheme,
};
