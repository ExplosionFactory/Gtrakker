/* eslint-disable no-console */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://user1:adminuser1@ds163940.mlab.com:63940/gtrakker');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => { console.log('connection successful'); });

const userSchema = mongoose.Schema({
  loginName: String,
  loginPass: String,
  battlefield: {
    platform: String,
    username: String,
  },
  cod: {
    platform: String,
    username: String,
  },
  fortnite: {
    platform: String,
    username: String,
  },
  overwatch: {
    username: String,
  },
});

const User = mongoose.model('User', userSchema);

const save = (dataObj) => {
  const userObj = {};
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(dataObj.loginPass, salt);
  userObj.loginPass = hash;
  userObj.loginName = dataObj.loginName;

  userObj.battlefield = {};
  userObj.battlefield.platform = dataObj.platforms.battlePlat;
  userObj.battlefield.username = dataObj.usernames.battleUser;

  userObj.cod = {};
  userObj.cod.platform = dataObj.platforms.codPlat;
  userObj.cod.username = dataObj.usernames.codUser;

  userObj.fortnite = {};
  userObj.fortnite.platform = dataObj.platforms.fortPlat;
  userObj.fortnite.username = dataObj.usernames.fortUser;

  userObj.overwatch = {};
  userObj.overwatch.username = dataObj.usernames.overUser;

  const user = new User(userObj);
  user.save((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${user}has been saved.`);
    }
  });
};

const getUserbyUsername = name => User.findOne({ loginName: name });

const deleteByUsername = name => User.findOne({ loginName: name }).remove().exec();

const updateByUsername = (name, game, user, plat) => {
  User.updateOne(
    { loginName: name },
    { $set: { ${game}: { platform: plat, username: user } } },
  );
};

module.exports.save = save;
module.exports.getUserbyUsername = getUserbyUsername;
module.exports.deleteByUsername = deleteByUsername;
module.exports.updateByUsername = updateByUsername;
