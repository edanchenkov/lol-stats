var express = require('express');
var app = express();

app.use('/bundles', express.static('www/bundles'));

app.get('/', function (req, res) {
    res.sendfile('www/index.html');
});

var port = process.env.PORT || 8080;

app.listen(port, function (req, res) {
    console.log('Running server on port');
});
