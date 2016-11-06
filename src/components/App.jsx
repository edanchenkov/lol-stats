import React from 'react';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import styles from './../styles';
import Search from './Search.jsx';


const style = {
    width : '75%',
    position : 'relative',
    top : '8rem',
    margin : '0 auto'
};

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
    componentWillMount() {
        document.body.style.backgroundColor = styles.white;
    }
    componentWillUnmount() {
        document.body.style.backgroundColor = '';
    }
}

export default Radium(App);
