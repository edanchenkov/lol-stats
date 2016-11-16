import React from 'react';
import Radium from 'radium';

import Logger from './../logger';
import realms from './../../data/realms.json';
import config from './../config';

import Api from './../api';

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
        this.summoner = this.props.summoner;

        Api.getMatchList(this.summoner.id, this.summoner.region).then((res) => {
            console.debug(res);
        });
    }

    render() {
        let summoner = this.summoner;
        let avatarUri = realms.cdn + '/' + realms.n.profileicon + '/img/profileicon/' + summoner.profileIconId + '.png';

        Logger.print('info', ['Render summoner', summoner]);

        return (
            <Card style={style.cardContainer}>
                <CardHeader
                    title={summoner.name}
                    subtitle={config.regions[summoner.region] + ' (' + summoner.summonerLevel + ')'}
                    avatar={avatarUri}
                />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla
                    facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor
                    quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque
                    lobortis odio.
                </CardText>
                <div></div>
            </Card>
        );
    }
}

export default Radium(SummonerCard);
