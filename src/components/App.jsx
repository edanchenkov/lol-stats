import React from 'react';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import ee from 'event-emitter';

import styles from './../styles';
import Search from './Search.jsx';

const style = {
    width : '55%',
    position : 'relative',
    top : '8rem',
    margin : '0 auto'
};

let emitter = ee();

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            summoners : []
        };

        emitter.on('ADD_SUMMONER', (summoner) => {
            console.log(summoner);
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div style={style}>
                    <Search emitter={emitter} />
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
