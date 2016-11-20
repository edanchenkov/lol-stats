let config = {
    logs : true,
    riotApi : {
        protocol : 'https://',
        host : 'api.pvp.net',
        region : ''
    },
    nodeApp : {},
    keys : {
        development : 'RGAPI-9cc57470-7927-4c11-a671-09c43ecc25b1',
        production : '< You API key >'
    },
    regions : {
        'euw' : 'Europe West',
        'na' : 'North America',
        'ru' : 'Russia',
        'kr' : 'Korea'
    },
    queueTypes : [
        'RANKED_TEAM_5x5',
        'RANKED_FLEX_SR'
    ],
    playerStatSummaryTypes : [
        'RankedTeam5x5',
        'RankedSolo5x5',
        'RankedFlexSR'
    ],
    seasons : [
        'PRESEASON2016',
        'SEASON2016',
        'PRESEASON2017',
        'SEASON2017'
    ]
};

export default config;
