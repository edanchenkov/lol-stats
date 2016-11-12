import React from 'react';
import Radium from 'radium';

import Logger from './../logger';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Api from './../api';

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
                id : 'tf-summoner-name'
            }
        };

        this.onChange = this.onChange.bind(this);
        this.search = this.search.bind(this);
    }

    search() {
        if (!this.state.textFieldEl.value) {
            return;
        }

        Logger.print('info', ['Run search for', this.state.textFieldEl.value]);
        Api.getSummonerIdByName(this.state.textFieldEl.value, 'euw').end((err, res = {}) => {
            if (res.ok) {
                console.debug(res);
            }
        });
    }

    onChange(event) {
        let _textFieldEl = this.state.textFieldEl;
        _textFieldEl.value = event.target.value;
        this.setState({ textFieldEl : _textFieldEl });
    }

    render() {
        return (
            <div id={this.state.id} style={style.searchContainer}>
                <Paper style={style.paperContainer} id={this.state.paperEl.id}
                       zDepth={4}>
                    {/*<FontIcon className="material-icons" style={{marginRight : 24}}>search</FontIcon>*/}
                    <TextField hintText={this.state.textFieldEl.hintText}
                               type="text"
                               id={this.state.textFieldEl.id}
                               onChange={this.onChange}
                               fullWidth={true}/>
                </Paper>
                <RaisedButton onClick={this.search.bind(this)}
                              style={style.searchButton}
                              label="Search"
                              primary={true}/>
            </div>
        );
    }
}

export default Radium(Search);
