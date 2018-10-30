const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gtrakker');

const userSchema = mongoose.Schema({
  loginName: String,
  loginPass: String,
  cod: {
    platform: String, 
    userName: String
  },
  fortnite: {
    platform: String,
    userName: String
  },
  battlefield: {
    platform: String,
    userName: String
  },
  overwatch: {
    platform: String,
    userName: String,
  }
});

const User = mongoose.model('User', userSchema);

const save = () => {

}

module.exports = {
  save, 
}