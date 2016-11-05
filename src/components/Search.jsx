import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" className="validate"/>
                    <label htmlFor="icon_prefix">First Name</label>
                </div>
            </div>
        );
    }
}


export default Search;
