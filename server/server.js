import express from 'express';
import api from './api';

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, (req, res) => {
    app.use('/bundles', express.static(__dirname + '/../www/bundles'));
    app.use('/api/', api);

    app.get('/', (req, res) => {
        res.sendFile('/www/index.html', { root : __dirname + '/../' });
    });

    console.log('Running server on port', port);
});
