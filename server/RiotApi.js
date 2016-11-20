import request from 'superagent';
import config from './../config';

const fetch = (uri, server, query = '') => {
    if (typeof server === 'undefined') {
        return Promise.reject(new Error('Specify region'));
    }

    query = '?' + (query ? query + '&' : '') + 'api_key=' + config.keys.development;

    return request
        .get(config.riotApi.protocol + server + '.' + config.riotApi.host + uri + query)
        .set('Accept', 'application/json');
};

class RiotApi {
    static getSummonerIdByName(name, region) {
        const uri = '/api/lol/' + region + '/v1.4/summoner/by-name/' + name;
        return fetch(uri, region);
    }

    static getSummonerDataById(id, region) {
        const uri = '/api/lol/' + region + '/v1.4/summoner/' + id;
        return fetch(uri, region);
    }

    static getChampions(region) {
        const uri = '/api/lol/static-data/' + region + '/v1.2/champion';
        return fetch(uri, 'global', 'locale=en_US&champData=image');
    }

    static getRealms(region) {
        const uri = '/api/lol/static-data/' + region + '/v1.2/realm';
        return fetch(uri, 'global');
    }

    static getMatchList(id, region) {
        const uri = '/api/lol/' + region + '/v2.2/matchlist/by-summoner/' + id;
        return fetch(uri, region, 'rankedQueues=' + config.queueTypes.join(',') + '&seasons=' + config.seasons.join(',') + '&beginIndex=0&endIndex=20');
    }

    static getSummonerSummary(id, region) {
        const uri = '/api/lol/' + region + '/v1.3/stats/by-summoner/' + id + '/summary';
        return fetch(uri, region);
    }

}

export default RiotApi;
