import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import realms from '../../../data/realms.json';
import Logger from './../../../logger';
import config from './../../../config';

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

const style = {
    cardContainer : {
        margin : '1rem 0'
    }
};

class SummonerCard extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
    }

    render() {

        Logger.print('info', ['Render summoner', this.data]);

        let summoner = this.data.summoner;
        let region = this.data.region;
        let matches = this.data.matches;
        let playerStatSummaries = this.data.playerStatSummaries;

        let avatarUri = realms.cdn + '/' + realms.n.profileicon + '/img/profileicon/' + summoner.profileIconId + '.png';

        let positions = _.chain(matches)
            .countBy((m) => {
                return m.lane;
            }).map((count, p) => {
                return {
                    position : p,
                    count : count,
                    percent : count / matches.length * 100
                };
            })
            .sortBy('count')
            .value()
            .reverse();

        let kda = _.chain(playerStatSummaries)
            .filter((ps) => {
                return !config.playerStatSummaryTypes.indexOf(ps.playerStatSummaryType);
            })
            .value();

        return (
            <Card style={style.cardContainer}>
                <CardHeader
                    title={summoner.name}
                    subtitle={config.regions[region] + ' (' + summoner.summonerLevel + ')'}
                    avatar={avatarUri}
                />
                <CardText>
                    <div>
                        Top {(positions.length > 1 ? '2 positions' : '1 position') + ' (last ' + matches.length + ' matches)'}
                    </div>
                    <div>{positions[0] ? positions[0].position + ':' + positions[0].count + ' ' + positions[0].percent + '%' : '' }</div>
                    <div>{positions[1] ? positions[1].position + ': ' + positions[1].count + ' ' + positions[1].percent + '%' : ''}</div>

                    <div>
                        {
                            kda.map((o, i) => {
                                return (
                                    <div key={i}>
                                        <h4>{o.playerStatSummaryType}</h4>
                                        <div>{o.wins + ' win(s) and ' + o.losses + ' lose(s)'}</div>
                                    </div>
                                );
                            })
                        }
                    </div>

                </CardText>
                <div></div>
            </Card>
        );
    }
}

export default Radium(SummonerCard);
