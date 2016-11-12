import request from 'superagent';

import config from './config';

const fetch = (uri, region) => {
    if (typeof region === 'undefined') {
        return Promise.reject(new Error('Specify region'));
    }

    return request
        .get(config.api.protocol + region + '.' + config.api.host + uri + '?api_key=' + config.keys.development)
        .set('Accept', 'application/json');
};

class Api {
    static getSummonerIdByName(name, region) {
        const uri = '/api/lol/' + region + '/v1.4/summoner/by-name/' + name;
        return fetch(uri, region);
    }

    static getSummonerDataById(id, region) {
        const uri = '/api/lol/' + region + '/v1.3/stats/by-summoner/' + id + '/summary';
        return fetch(uri, region);
    }
}

export default Api;
