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
    document.getElementById('chng-bkgrd-color').innerHTML = 'A9A9A9';
    document.getElementById('chng-txt-color').innerHTML = 'FFFFFF';
    customBtn.classList.remove('active');
    lightBtn.classList.remove('active');
    e.target.classList.add('active');
<<<<<<< HEAD
    // for (let i = 0; i < messageContainers.length; i++) {
    //   messageContainers[i].style.backgroundColor = `DarkGray`;
    //   messageContainers[i].style.color = `White`;
    // };
    e.target.blur();
=======
    for (let i = 0; i < messageContainers.length; i++) {
      messageContainers[i].style.backgroundColor = `DarkGray`;
      messageContainers[i].style.color = `White`;
    };
>>>>>>> a2609a28a4f459b173fa93b1b2a0dc78067fe788
  } else if (e.target.id === 'light-theme') {
    document.getElementById('chng-bkgrd-color').innerHTML = 'eeeeee';
    document.getElementById('chng-txt-color').innerHTML = '000000';
    customBtn.classList.remove('active');
    darkBtn.classList.remove('active');
    e.target.classList.add('active');
<<<<<<< HEAD
    // for (let i = 0; i < messageContainers.length; i++) {
    //   messageContainers[i].style.backgroundColor = `White`;
    //   messageContainers[i].style.color = `Black`;
    // };
    e.target.blur();
  } else if (e.target.id === 'save-CustomTheme-Btn') {
    document.getElementById('chng-txt-color').innerHTML;
    lightBtn.classList.remove('active');
    darkBtn.classList.remove('active');
    customBtn.classList.add('active');
    customBtn.blur();
  };
  for (let i = 0; i < messageContainers.length; i++) {
    const backgroundChangeBtn = document.getElementById('chng-bkgrd-color').innerHTML;
    const textChangeBtn = document.getElementById('chng-txt-color').innerHTML;
    messageContainers[i].style.backgroundColor = `#${backgroundChangeBtn}`;
    messageContainers[i].style.color = `#${textChangeBtn}`;
=======
    for (let i = 0; i < messageContainers.length; i++) {
      messageContainers[i].style.backgroundColor = `#eeeeee`;
      messageContainers[i].style.color = `#000000`;
    };
  } else if (e.target.id === 'custom-theme') {
    const backgroundChangeBtn = document.getElementById('chng-bkgrd-color').innerHTML;
    const textChangeBtn = document.getElementById('chng-txt-color').innerHTML;
    lightBtn.classList.remove('active');
    darkBtn.classList.remove('active');
    e.target.classList.add('active');
    for (let i = 0; i < messageContainers.length; i++) {
      messageContainers[i].style.backgroundColor = `#${backgroundChangeBtn}`;
      messageContainers[i].style.color = `#${textChangeBtn}`;
    };
>>>>>>> a2609a28a4f459b173fa93b1b2a0dc78067fe788
  };
  e.target.blur();
};

module.exports = {
  previewTheme,
  applyTheme,
};
