import React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
    width : '50%',
    margin : '0 auto'
};

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            zDepth : 4,
            hintText : 'Summoner name',
            id : 'summoner-name'
        };
    }

    render() {
        return (
            <Paper zDepth={this.state.zDepth}>
                <TextField hintText={this.state.hintText}
                           id={this.state.id}/>
            </Paper>
        );
    }
}

export default Search;
