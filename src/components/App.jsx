import React from 'react';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Search from './Search.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const style = {
    width : '50%',
    position: 'relative',
    top: '4rem',
    margin : '0 auto'
};

// @Radium
class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div style={style}>
                    <Search/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Radium(App);
