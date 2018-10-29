const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))