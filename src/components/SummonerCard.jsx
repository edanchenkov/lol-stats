import React from 'react';
import Radium from 'radium';

class SummonerCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        let summoner = this.props.summoner;
        return (<div>{summoner.summonerId}</div>);
    }
}

export default Radium(SummonerCard);
