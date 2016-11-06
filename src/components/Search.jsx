import React from 'react';
import Radium from 'radium';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import FontIcon from 'material-ui/FontIcon';

const style = {
    searchContainer : {},
    searchButton : {
        marginTop : '2rem'
    },
    paperContainer : {
        padding : '0 1.5rem'
    }
};

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            id : 'search-container',
            paperEl : {
                id : 'p-search-summoner-name'
            },
            textFieldEl : {
                hintText : 'Summoner name',
                id : 'tf-summoner-name',
            }
        };
    }

    render() {
        return (
            <div id={this.state.id} style={style.searchContainer}>
                <Paper style={style.paperContainer} id={this.state.paperEl.id}
                       zDepth={4}>
                    {/*<FontIcon className="material-icons" style={{marginRight : 24}}>search</FontIcon>*/}
                    <TextField hintText={this.state.textFieldEl.hintText}
                               id={this.state.textFieldEl.id}
                               fullWidth={true}/>
                </Paper>
                <RaisedButton style={style.searchButton} label="Search"
                              primary={true}/>
            </div>
        );
    }
}

export default Radium(Search);
