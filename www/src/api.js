import request from 'superagent';

const fetch = (uri) => {
    return request
        .get('http://localhost:8080/api' + uri)
        .set('Accept', 'application/json');
};

class Api {
    static getSummonerCardBySummonerName(summonerName, region) {
        const uri = '/summoner/' + region + '/' + summonerName + '/card';
        return fetch(uri, region);
    }
}

export default Api;
