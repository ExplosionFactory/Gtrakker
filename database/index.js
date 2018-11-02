const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/gtrakker');
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
    platform: String,
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
  userObj.overwatch.platform = dataObj.platforms.overPlat;
  userObj.overwatch.username = dataObj.usernames.overUser;

  // console.log('user', userObj);
  const user = new User(userObj);
  user.save((err) => {
    if (err) {
      console.error(err);
    } else {
      /* eslint-disable no-console */
      console.log(`${user}has been saved.`);
      /* eslint-enable no-console */
    }
  });
};

const getUserbyUsername = name => User.findOne({ loginName: name });

module.exports.save = save;
module.exports.getUserbyUsername = getUserbyUsername;
