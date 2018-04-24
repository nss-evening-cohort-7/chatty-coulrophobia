let users = [];

const setUsers = (userArray) => {
  users = userArray;
};

const getUsers = () => {
  return users;
};

module.exports = {
  setUsers,
  getUsers,
};
