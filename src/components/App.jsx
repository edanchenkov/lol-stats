import React from 'react';
import Search from './Search.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                {/*<Search />*/}
                <RaisedButton className="myClass" label="Default"/>
            </MuiThemeProvider>

        );
    }
}

export default App;
