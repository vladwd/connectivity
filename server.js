var express = require('express')
var ws = require('./ws')
var os = require('os')
var app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/websockets', function (req, res) {
    res.sendFile(__dirname + '/ws.html');
});

app.get('/longpolls', function (req, res) {
    res.sendFile(__dirname + '/longpoll.html');
});

app.get('/getmessage', function (req, res) {
    res.send({avg:os.loadavg(), memory:os.totalmem(), free:os.freemem()});
});

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
