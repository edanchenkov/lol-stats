import request from 'superagent';

import config from './config';

const fetch = (uri, region='global') => {
    return request.get(config.api.protocol + region + '.' + config.api.host + uri + '?api_key=' + config.keys.development)
    .set('Accept', 'application/json');
};

class Api {
    static getSummonerIdByName(name, region) {
        const uri = '/api/lol/euw/v1.4/summoner/by-name/' + name;
        return fetch(uri, region);
    }
}

export default Api;
