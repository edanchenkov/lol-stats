import React from 'react';
import Radium from 'radium';

import Logger from './../logger';
import globalStyles from './../styles';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import Api from './../api';

const style = {
    searchContainer : {
        width : '80%',
        margin : '0 auto'
    },
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
        Api.getSummonerIdByName(this.state.textFieldEl.value, this.state.region).then((res) => {
            if (res.ok && res.body && Object.keys(res.body)) {
                let { id } = res.body[Object.keys(res.body)[0]];
                Api.getSummonerDataById(id, this.state.region).then((res) => {
                    this.props.handleSearchResult(res.body[id]);
                });
            }
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
            <div id={this.state.id} style={style.searchContainer}>
                <Paper style={style.paperContainer} id={this.state.paperEl.id}
                       zDepth={globalStyles.defaultDepth}>
                    {/*<FontIcon className="material-icons" style={{marginRight : 24}}>search</FontIcon>*/}
                    <TextField hintText={this.state.textFieldEl.hintText}
                               type="text"
                               id={this.state.textFieldEl.id}
                               onChange={this.onChange}
                               fullWidth={true}/>
                    <SelectField value={this.state.region}
                                 onChange={this.selectRegion} autoWidth={true}>
                        <MenuItem value={'euw'} primaryText="EUW"/>
                        <MenuItem value={'na'} primaryText="NA"/>
                        <MenuItem value={'kr'} primaryText="KR"/>
                        <MenuItem value={'ru'} primaryText="RU"/>
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
