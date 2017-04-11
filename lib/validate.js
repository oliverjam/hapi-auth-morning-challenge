const bcrypt = require('bcryptjs');
const usersDB = require('../database/users.js');

const basicValidate = (request, username, password, cb)  => {
  if (!usersDB[username]) return cb(null, false);
  bcrypt.compare(password, usersDB[username].password, (err, isValid) => {
    return cb(err, isValid, { username, scope: usersDB[username].permissions });
  });
}

module.exports = basicValidate;
