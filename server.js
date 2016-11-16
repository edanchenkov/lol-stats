var express = require('express');
var app = express();

app.use('/bundles', express.static('www/bundles'));

app.get('/', function (req, res) {
    res.sendfile('www/index.html');
});

app.listen(8080, function (req, res) {
    console.log('Listening on :8080')
});
