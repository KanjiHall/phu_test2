const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const app = express();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/SRCFLAG', function (req, res) {
    const test = { "NetW0rk":"4R3nS1c"};
    res.status(200).json(test);
});

app.use('/', router);
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.listen(8080);