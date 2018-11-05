/* eslint-disable no-console */
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
const port = 80;
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
  username: null,
  cookie: {
    path: '/',
  },
}));
app.get('/forum', (req, res) => {
  db.findMsgByGame('general').then((messages) => {
    console.log(messages);
    res.send(messages);
    res.end();
  }).catch((err) => {
    res.send(err);
    res.end();
  });
});
app.post('/forum', (req, res) => {
  const userMessage = req.body.mess;
  const userName = req.session.user;
  const room = 'general';
  db.saveMsg({ game: room, name: userName, message: userMessage });
  res.end();
});
app.post('/signup', (req, res) => {
  db.getUserbyUsername(req.body.loginName).then((user) => {
    if (user === null) {
      db.save(req.body);
      res.end();
    } else {
      res.send('true');
    }
  });
});

app.post('/update', (req, res) => {
  // console.log(req.body.game);
  if (req.body.game === 'battlefield') {
    db.updateByUsernameBattle(req.session.user, req.body.user, req.body.platform);
    res.end();
  } else if (req.body.game === 'cod') {
    // console.log('cod');
    db.updateByUsernameCod(req.session.user, req.body.user, req.body.platform);
    res.end();
  } else if (req.body.game === 'fortnite') {
    db.updateByUsernameFort(req.session.user, req.body.user, req.body.platform);
    res.end();
  } else if (req.body.game === 'overwatch') {
    db.updateByUsernameOverwatch(req.session.user, req.body.user);
    res.end();
  }
});
app.post('/delete', (req, res) => {
  const username = req.session.user;
  const password = req.body.password;
  db.getUserbyUsername(username).then((user) => {
    bcrypt.compare(password, user.loginPass, (err, resolve) => {
      if (err) {
        console.log(err);
      } else if (resolve) {
        console.log(req.session.user);
        const username = req.session.user;
        db.deleteByUsername(username);
        req.session.destroy();
        res.end();
      }
    });
  });
});

app.post('/end', (req, res) => {
  req.session.destroy();
  res.send('ok');
});

app.post('/login', (req, res) => {
  const username = req.body.loginName;
  const password = req.body.loginPassword;

  db.getUserbyUsername(username).then((user) => {
    bcrypt.compare(password, user.loginPass, (err, resolve) => {
      if (err) {
        console.log(err);
      } else if (resolve) {
        return req.session.regenerate(() => {
          req.session.user = username;
          res.send('true');
        });
      }
    });
  });
});

app.post('/bf4', (req, res) => {
  const plat = req.body.platform;
  const user = req.body.username;
  axios.get(`http://api.bf4stats.com/api/playerInfo?plat=${plat}&name=${user}&output=json`)
    .then((response) => {
      res.send(response.data);
    }).catch((err) => {
      res.send(err);
    });
});

app.post('/cod', (req, res) => {
  let platform;
  const user = req.body.username;
  if (req.body.platform === 'psn') {
    platform = 2;
  } else if (req.body.platform === 'xbox') {
    platform = 1;
  } else if (req.body.platform === 'BattleNet') {
    platform = 1;
  }
  const config = {
    headers: {
      'TRN-API-Key': '01587c67-4b71-49f8-aeac-eaae6f83ad90',
    },
  };
  axios.get(`https://cod-api.tracker.gg/v1/standard/bo4/profile/${platform}/${user}`, config)
    .then((response) => {
      res.send(response.data);
    }).catch((err) => {
      res.send(err);
    });
});

app.post('/fort', (req, res) => {
  const platform = req.body.platform;
  const user = req.body.username;
  const config = {
    headers: {
      'TRN-API-Key': '01587c67-4b71-49f8-aeac-eaae6f83ad90',
    },
  };
  axios.get(`https://api.fortnitetracker.com/v1/profile/${platform}/${user}`, config)
    .then((response) => {
      res.send(response.data.lifeTimeStats);
    }).catch((err) => {
      res.send(err);
    });
});

app.post('/over', (req, res) => {
  const user = req.body.username;
  axios.get(`https://ow-api.com/v1/stats/pc/us/${user}/profile`)
    .then((response) => {
      res.send(response.data);
    }).catch((err) => {
      res.send(err);
      res.send(err);
    });
});


app.post('/news', (req, res) => {
  axios.get('https://newsapi.org/v2/top-headlines?sources=ign&apiKey=3d777cd4d5514902b66b96aa555766ea')
    .then((response) => {
      res.send(response.data.articles);
    }).catch((err) => {
      res.send(err);
    });
});

app.get('/loggedin', (req, res) => {
  if (!req.session.user) {
    res.send('');
  } else {
    res.send('ok');
  }
});

app.get('/appUser', (req, res) => {
  const userName = req.session.user;
  db.getUserbyUsername(userName).then((user) => {
    res.send(user);
  });
});
app.post('/appUser', (req, res) => {
  console.log(req.body);
  const userName = req.body.username;
  db.getUserbyUsername(userName).then((user) => {
    console.log(user);
    res.send(user);
  });
});
app.post('/twitch', (req, res) => {
  const games = ['Fortnite', 'Overwatch', 'Call of Duty: Black Ops 4', 'Battlefield 4'];
  const game = games[Math.floor(Math.random() * games.length)];
  const config = {
    headers: {
      'Client-ID': 'eutum6yldtscmam5mu1s02bakosx69',
      'Accept': 'application/vnd.twitchtv.v5+json',
    },
  };
  axios.get(`https://api.twitch.tv/kraken/clips/top?limit=1&game=${game}&trending=true`, config)
    .then((response) => {
      res.send(response.data);
    }).catch((err) => {
      res.send(err);
    });
});

app.post('/suggested', (req, res) => {
  const config = {
    headers: {
      'Client-ID': 'eutum6yldtscmam5mu1s02bakosx69',
      'Accept': 'application/vnd.twitchtv.v5+json',
    },
  };
  axios.get('https://api.twitch.tv/kraken/games/top', config)
    .then((response) => {
      res.send(response.data);
    }).catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => console.log(`now listen here u little port ${port}`));
