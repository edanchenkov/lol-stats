import express from 'express';
import RiotApi from './RiotApi';

const Router = express.Router();

Router.get('/summoner/:region/:summonerName/card', (req, res) => {

    let summonerName = req.params.summonerName;
    let region = req.params.region;

    RiotApi.getSummonerIdByName(summonerName, region).then((data) => {
        res.json({
            'res' : JSON.parse(data.text),
            'name' : req.params.summonerName,
            'region' : req.params.region
        });
    });
});


export default Router;
