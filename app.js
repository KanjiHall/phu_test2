const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const app = express();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// router.get('/test', function (req, res) {
//     const test = { "NetW0rk":"4R3nS1c"};
//     res.status(200).json(test);
// });
router.get('/test', function (req, res) {
    res.send("srcflag:{abc}");
});

app.use('/', router);
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.listen(process.env.PORT || 8080, '0.0.0.0', () => {
    console.log("Server is running.");
});