var express = require('express');
var app = express();

app.use('/bundles', express.static('www/bundles'));

app.get('/', function (req, res) {
    res.sendfile('www/index.html');
});

app.listen(80, function (req, res) {
    console.log('Running server on 80');
});
