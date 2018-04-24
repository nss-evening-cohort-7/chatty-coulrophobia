// returns a string of the current date in this format:
// 4/24/2018 - 18:20
// const getCurrentTime = require('./timestamp');

const getCurrentTime = () => {
  const currentDate = new Date();
  const output = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()} - ${currentDate.getHours()}:${currentDate.getMinutes()}`;
  return output;
};

module.exports  = getCurrentTime;
