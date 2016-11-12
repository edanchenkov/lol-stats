import React from 'react';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import styles from './../styles';
import Search from './Search.jsx';

const style = {
    width : '55%',
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
        summoners.push(summoner);
        this.setState({ summoners : summoners });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div style={style}>
                    <Search handleSearchResult={this.handleSearchResult}/>
                    {
                        this.state.summoners.map((summoner, i) => {
                            return <div key={i}>{summoner.summonerId}</div>;
                        })
                    }
                </div>
            </MuiThemeProvider>
        );
    }

    componentWillMount() {
        document.body.style.backgroundColor = styles.white;
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = '';
    }
}

export default Radium(App);
