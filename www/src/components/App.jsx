import React from 'react';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import globalStyles from './../styles';

import Search from './Search.jsx';
import SummonerCard from './SummonerCard.jsx';

const style = {
    width : '100%',
    position : 'relative',
    top : '8rem',
    margin : '0 auto'
};

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            summoners : []
        };

        this.handleSearchResult = this.handleSearchResult.bind(this);
    }

    handleSearchResult(summoner) {
        let summoners = this.state.summoners.slice();
        summoners.unshift(summoner);
        this.setState({ summoners : summoners });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div style={style}>
                    <Search handleSearchResult={this.handleSearchResult}/>
                    {
                        this.state.summoners.map((summoner, i) => {
                            return <SummonerCard key={i} summoner={summoner}/>;
                        })
                    }
                </div>
            </MuiThemeProvider>
        );
    }

    componentWillMount() {
        document.body.style.backgroundColor = globalStyles.white;
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = '';
    }
}

export default Radium(App);
