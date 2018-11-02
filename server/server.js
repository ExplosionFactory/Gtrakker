/* eslint-disable no-console */
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;
const axios = require('axios');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../client`));
app.use(express.static(`${__dirname}/../node_modules`));
app.use(session({
  secret: 'hackerman',
  resave: true,
  saveUninitialized: true,
  cookie: {
    username: null,
  },
}));

app.post('/signup', (req, res) => {
  db.save(req.body);
  res.status(200);
});

app.post('/login', (req, res) => {
  const username = req.body.loginName;
  const password = req.body.loginPassword;

  db.getUserbyUsername(username).then((user) => {
    bcrypt.compare(password, user.loginPass, (err, resolve) => {
      if (err) {
        console.log(err);
      } else if (resolve) {
        res.send('true');
      }
    });
  });
});

app.post('/battle', (req, res) => {
  const config = {
    headers: {
      'TRN-API-Key': '01587c67-4b71-49f8-aeac-eaae6f83ad90',
    },
  };
  axios.get(` https://battlefieldtracker.com/bf1/api/Stats/CareerForOwnedGames?platform=${plat}&displayName=${name}`, config)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    }).catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.post('/cod', (req, res) => {
  const config = {
    headers: {
      'TRN-API-Key': '01587c67-4b71-49f8-aeac-eaae6f83ad90',
    },
  };
  axios.get(`https://cod-api.tracker.gg/v1/standard/bo4/profile/${plat}/${name}`, config)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    }).catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.post('/fort', (req, res) => {
  const config = {
    headers: {
      'TRN-API-Key': '01587c67-4b71-49f8-aeac-eaae6f83ad90',
    },
  };
  axios.get('https://api.fortnitetracker.com/v1/profile/psn/bout2nut', config)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    }).catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.post('/over', (req, res) => {

});


app.listen(port, () => console.log(`now listen here u little port ${port}`));
