import React from 'react';
import Search from './Search.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Search />
            </MuiThemeProvider>

        );
    }
}

export default App;
