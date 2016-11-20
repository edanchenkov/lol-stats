import express from 'express';

import Cache from './cache';
import RiotApi from './RiotApi';
import Logger from './../logger';

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
            Logger.print('log', ['Return data from cache']);
            jsonResponse(res, 200, cacheData);
        } else {
            Logger.print('log', [
                'Cache data is outdated',
                [summoner.id, summoner.revisionDate]
            ]);

            Promise.all([
                RiotApi.getMatchList(summoner.id, region),
                RiotApi.getSummonerSummary(summoner.id, region)
            ]).then((data) => {
                jsonResponse(res, 200, Cache.set({
                    summoner : summoner,
                    matches : JSON.parse(data[0].text).matches,
                    region : region,
                    playerStatSummaries : JSON.parse(data[1].text).playerStatSummaries
                }, req.path));

            }).catch((err) => {
                jsonResponse(res, err.status, err);
            });
        }
    }).catch((err) => {
        jsonResponse(res, err.status, err);
    });
});

let jsonResponse = (res, status, body) => {
    res.status(status).json(body);
};


export default Router;
