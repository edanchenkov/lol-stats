import React from 'react';
import Radium from 'radium';

import globalStyles from './../styles';

import Paper from 'material-ui/Paper';

class SummonerCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        let summoner = this.props.summoner;
        return (
            <Paper zDepth={globalStyles.defaultDepth}>
                <h1>{summoner.name}</h1>
            </Paper>
        );
    }
}

export default Radium(SummonerCard);
