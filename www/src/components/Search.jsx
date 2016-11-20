import React from 'react';
import Radium from 'radium';

import Logger from './../../../logger';
import globalStyles from './../styles';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import config from './../../../config';
import Api from './../api';

const style = {
    searchContainer : {
        width : '30rem',
        margin : '0 auto'
    },
    searchButton : {
        marginTop : '2rem'
    },
    paperContainer : {
        padding : '0 1.5rem'
    },
    summonerName : {
        width : '15rem',
        float : 'left'
    },
    selectRegion : {
        width : '10rem',
        marginLeft : '1rem'
    }
};

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            id : 'search-container',
            textFieldEl : {
                value : ''
            },
            region : 'euw'
        };

        this.onChange = this.onChange.bind(this);
        this.selectRegion = this.selectRegion.bind(this);
        this.search = this.search.bind(this);
    }

    search() {
        if (!this.state.textFieldEl.value) {
            return;
        }

        Logger.print('info', ['Run search for', this.state.textFieldEl.value, this.state.region]);

        Api.getSummonerCardBySummonerName(this.state.textFieldEl.value, this.state.region).then((res) => {
            this.props.handleSearchResult(res.body);
        }).catch((err) => {
            // TODO: Handle errors : 404
        });
    }

    onChange(event) {
        let _textFieldEl = this.state.textFieldEl;
        _textFieldEl.value = event.target.value;
        this.setState({ textFieldEl : _textFieldEl });
    }

    selectRegion(event, key, value) {
        this.setState({ region : value });
    }

    render() {
        return (
            <div style={style.searchContainer}>
                <Paper style={style.paperContainer}
                       zDepth={globalStyles.defaultDepth}>
                    {/*<FontIcon className="material-icons" style={{marginRight : 24}}>search</FontIcon>*/}
                    <TextField style={style.summonerName}
                               hintText="Summoner name"
                               type="text"
                               onChange={this.onChange}
                               fullWidth={true}/>
                    <SelectField id="select-region" style={style.selectRegion}
                                 value={this.state.region}
                                 onChange={this.selectRegion} autoWidth={true}>

                        {
                            Object.keys(config.regions).map((key, i) => {
                                return <MenuItem key={i} value={key}
                                                 primaryText={config.regions[key]}/>;
                            })
                        }
                    </SelectField>
                </Paper>
                <RaisedButton onClick={this.search}
                              style={style.searchButton}
                              label="Search"
                              primary={true}/>
            </div>
        );
    }
}

export default Radium(Search);
