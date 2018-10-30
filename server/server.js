const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));

app.post('/battle', (req, res) => {

});

app.post('/cod', (req, res) => {
  
});

app.post('/fort', (req, res) => {
  
});

app.post('/over', (req, res) => {
  
});

app.listen(port, () => console.log(`now listen here u little port ${port}`))