const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));

app.post('/battle', (req, res) => {

});

app.post('/cod', (req, res) => {

});

app.post('/fort', (req, res) => {
  const config = {
    headers: {
      'TRN-API-Key': '01587c67-4b71-49f8-aeac-eaae6f83ad90',
    }
  }
  axios.get('https://api.fortnitetracker.com/v1/profile/psn/bout2nut', config)
    .then((response) => {
      console.log(response.data)
      res.send(response.data);
    }).catch((err) => {
      console.log(err);
      res.send(err);
    });
});
app.post('/over', (req, res) => {

});

app.listen(port, () => console.log(`now listen here u little port ${port}`))