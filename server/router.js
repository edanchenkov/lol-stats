import express from 'express';

import Cache from './cache';
import RiotApi from './RiotApi';

const Router = express.Router();

Router.get('/summoner/:region/:summonerName/card', (req, res) => {

    let summonerName = req.params.summonerName;
    let region = req.params.region;

    RiotApi.getSummonerIdByName(summonerName, region).then((data) => {

        let summoner = JSON.parse(data.text);
        summoner = summoner[Object.keys(summoner)[0]];

        let cachedSummoner = Cache.get(req.path);

        if (typeof cachedSummoner === 'object' && cachedSummoner.revisionDate === summoner.revisionDate) {
            res.json({
                data : cachedSummoner,
                status : 200
            });
        } else {
            //TODO: Do other calls to get card
            Cache.set(req.path, summoner);

            res.json({
                data : summoner,
                status : 200
            });
        }
    });
});


export default Router;
