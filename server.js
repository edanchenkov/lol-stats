var express = require('express');
var app = express();

app.use('/bundles', express.static('www/bundles'));

app.get('/', function (req, res) {
    res.sendFile('www/index.html', { root : __dirname });
});

var port = process.env.PORT || 8080;

app.listen(port, function (req, res) {
    console.log('Running server on port', port);
});
