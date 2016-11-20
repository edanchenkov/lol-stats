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

        let cacheData = Cache.get(req.path);

        if (typeof cacheData === 'object' &&
            (JSON.stringify(cacheData.summoner) === JSON.stringify(summoner))) {
            console.log('Return data from cache');
            jsonResponse(res, 200, cacheData);
        } else {
            console.log('Cache data is outdated');
            RiotApi.getMatchList(summoner.id, region).then((data) => {
                jsonResponse(res, 200, Cache.set(req.path, {
                    summoner : summoner,
                    matches : JSON.parse(data.text).matches
                }));
            }).catch((err) => {
                jsonResponse(res, err.status, err);
            });
        }
    });
});

let jsonResponse = (res, status, body) => {
    res.status(status).json(body);
};


export default Router;
